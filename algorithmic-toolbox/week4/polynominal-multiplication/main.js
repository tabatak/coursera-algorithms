let readline = require('readline');
let lines = [];
process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});
rl.on('line', readLine);
function readLine (line) {
  if (line !== "\n") {
    lines.push(line);
  }
  if (lines.length >= 2) {
    // ここに処理を書く
    const a = lines[0].split(' ').map((n) => parseInt(n));
    const b = lines[1].split(' ').map((n) => parseInt(n));
    const result = multPoly(a, b, a.length);
    console.log(result.join(' '));
    process.exit();
  }
}

const multPoly = (a, b, n) => {
  /*
  [2 1] * [3 0] -> [6 3 0]
  */
  let product = [];
  for(let i = 0; i < 2*n-1; i++){
    product.push(0);
  }

  for(let i = 0; i < a.length; i++){
    for(let j = 0; j < b.length; j++){
      product[i+j] = product[i+j] + (a[i] * b[j]);
    }
  }
  return product;
};