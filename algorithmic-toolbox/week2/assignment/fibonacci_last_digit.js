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
  if (lines.length >= 1) {
    // ここに処理を書く
    const num = parseInt(lines[0]);
    console.log(fibonacciLastDigit(num));

    process.exit();
  }
}

const fibonacciLastDigit = (num) => {
  let fibarr = [];
  fibarr[0] = 0;
  fibarr[1] = 1;
  for(let i = 2; i <= num; i++){
    fibarr[i] = (fibarr[i-1] % 10) + (fibarr[i-2] % 10);
  }
  return fibarr[num] % 10;
};
