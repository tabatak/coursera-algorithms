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
  if (lines.length === 1) {
    // ここに処理を書く
    const n = parseInt(lines[0]);
    const result = differentSummands(n); 
    console.log(result.length);
    // console.log(result.join(' '));
    for (const summand of result) {
      process.stdout.write(`${summand} `);
    }
    process.exit();
  }
}

const differentSummands = (n) => {
  let remainder = n;
  let result = [];
  let current = 1;
  while(remainder > 0){
    if(current < remainder && current < remainder - current){
      result.push(current);
      remainder -= current;
      current += 1;
    }else{
      result.push(remainder);
      remainder -= remainder;
    }
  }
  return result;
};