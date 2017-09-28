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
    const nums = lines[0].split(' ').map((n) => parseInt(n));
    console.log(lcm(nums[0], nums[1]));
    process.exit();
  }
}

const lcmNv = (a, b) => {
  let result = 1;
  for(let i = 1; i <= a*b; i++){
    if((a % i === 0) && (b % i === 0)){
      result = i * (a/i) * (b/i);
    }
  }
  return result;
};
const lcm = (a, b) => {
  return a * b / gcd(a, b)
};
const gcd = (a, b) => {
  if(b === 0) {
    return a;
  }
  const remainder = a % b;
  return gcd(b, remainder); 
};


