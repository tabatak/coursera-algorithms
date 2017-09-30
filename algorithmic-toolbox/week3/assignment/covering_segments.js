let readline = require('readline');
let lines = [];
let n = 0;
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
    n = parseInt(lines[0]);
  }else if (lines.length === n + 1) {
    // ここに処理を書く
    let arr = [];
    for(let i = 1; i < n+1; i++){
      const c = {start: parseInt(lines[i].split(' ')[0]), end: parseInt(lines[i].split(' ')[1])};
      arr.push(c);
    }
    const result = coveringSegments(n, arr); 
    console.log(result.length);
    console.log(result.join(' '));
    process.exit();
  }
}
const coveringSegments = (n, arr) => {
  const sortedArr = arr.sort((a, b) => {
    if (a.start !== b.start){
      return a.start - b.start;
    }else{
      return a.end - b.end;
    }
  });

  let result = [];
  let i = 0;
  while(i < sortedArr.length){
    let max = sortedArr[i].end;
    i++;
    for(let j = i; j < sortedArr.length; j++){
      if(max < sortedArr[j].start){
        result.push(max);
        i = j;
        break;
      }

      if(sortedArr[j].end < max){
        max = sortedArr[j].end;
      }
      i = j + 1;
    }

    if(i === sortedArr.length) {
      result.push(max);
    }
}

  return result;
};