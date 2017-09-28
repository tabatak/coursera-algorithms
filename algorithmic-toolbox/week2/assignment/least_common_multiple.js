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
    // const nums = lines[0].split(' ').map((n) => parseInt(n));
    // console.log(gcd(nums[0], nums[1]));
    process.exit();
  }
}
