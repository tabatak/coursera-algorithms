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
    console.log(fibonacci(num));

    process.exit();
  }
}

const fibonacci = (num) => {
  let fibarr = [];
  fibarr[0] = 0;
  fibarr[1] = 1;
  for(let i = 2; i <= num; i++){
    fibarr[i] = fibarr[i-1] + fibarr[i-2];
  }
  return fibarr[num];
};

const fibonacciNaive = (num) =>{
  if (num <=1){
    return num;
  }else{
    return fibonacciNaive(num - 1) + fibonacciNaive(num - 2);
  }
};
const mod = {
  fibonacciNaive: fibonacciNaive,
  fibonacci: fibonacci
};
module.exports = mod;