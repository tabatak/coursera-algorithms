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
    console.log(gcd(nums[0], nums[1]));
    process.exit();
  }
}

const gcd = (a, b) => {
  if(b === 0) {
    return a;
  }
  const remainder = a % b;
  return gcd(b, remainder); 
};
const gcdNv = (a, b) => {
  let result = 0;
  for(let d = 1; d <= a+b; d++){
      if(a%d === 0 && b%d === 0){
        result = d;
      }
  }
  return result;
};
const mod = {
  gcdNv: gcdNv,
  gcd: gcd
};
module.exports = mod;