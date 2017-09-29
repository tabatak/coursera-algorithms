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
    const nums = lines[0].split(' ').map((n) => parseFloat(n));
    console.log(pointsCoverSorted(nums));
    process.exit();
  }
}

const pointsCoverSorted = (arr) => {
  let r = [];
  let i = 0;
  while (i < arr.length) {
    const current = [arr[i], arr[i] + 1];
    r.push(current);
    i += 1;
    while(i < arr.length && arr[i] <= current[1]){
      i += 1;
    }
  }
  return r;
};
const mod = {
  pointsCoverSorted: pointsCoverSorted
};
module.exports = mod;