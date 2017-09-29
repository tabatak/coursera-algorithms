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
    const n = parseInt(lines[0]);
    console.log(changingMoney(n));
    process.exit();
  }
}

const changingMoney = (n) => {
  const coins = [10, 5, 1];
  let result = 0;
  let remainder = n;
  while(remainder > 0){
    for(let i = 0; i < coins.length; i++){
      if (coins[i] <= remainder){
        remainder -= coins[i];
        result++;
        break;
      }
    }
  }
  return result;
}