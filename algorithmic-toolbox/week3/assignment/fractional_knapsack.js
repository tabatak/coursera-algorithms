let readline = require('readline');
let lines = [];
let n = 0;
let w = 0;
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
    n = parseFloat(lines[0].split(' ')[0]);
    w = parseFloat(lines[0].split(' ')[1]);
  }else if (lines.length === n + 1) {
    // ここに処理を書く
    let loots = [];
    for(let i = 1; i < n+1; i++){
      const loot = {v: parseFloat(lines[i].split(' ')[0]), w: parseFloat(lines[i].split(' ')[1])};
      loots.push(loot);
    }
    console.log(fractionalKnapsack(n, w, loots));
    process.exit();
  }
}

const fractionalKnapsack = (n, w, loots) => {
  const sortedLoots = loots.sort((a, b) => (b.v/b.w) - (a.v/a.w));
  let result = 0;
  let remainder = w;
  for(let i = 0; i < sortedLoots.length; i++){
    if(remainder === 0){
      return result;
    }
    const a = Math.min(sortedLoots[i].w, remainder);
    result += a * (sortedLoots[i].v/sortedLoots[i].w);
    remainder -= a;
  }
  return Math.ceil(result * Math.pow(10, 4)) / Math.pow(10, 4);
}