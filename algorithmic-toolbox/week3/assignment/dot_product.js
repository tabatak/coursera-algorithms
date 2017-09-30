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
  if (lines.length >= 3) {
    // ここに処理を書く
    const n = parseInt(lines[0]);
    const profits = lines[1].split(' ').map((n) => parseInt(n));
    const clicks = lines[2].split(' ').map((n) => parseInt(n));
    console.log(dotProduct(n, profits, clicks));
    process.exit();
  }
}

const dotProduct = (n, profits, clicks) => {
  // まずはprofits,clicksともに降順にソート
  const sortedP = profits.sort((a,b) => b - a);
  const sortedC = clicks.sort((a,b) => b - a);
  let result = 0;
  for(let i = 0; i < n; i++){
    // 大きい値を掛け合わせてたしていく
    result += sortedP[i] * sortedC[i];
  }
  return result;

};
