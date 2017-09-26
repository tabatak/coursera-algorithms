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

  if (lines.length >= 2) {
    // ここに処理を書く
    const num = parseInt(lines[0]);
    const arr = lines[1].split(' ').map((n) => parseInt(n));
    const result = maxPairwiseProduct(num, arr);
    console.log(result);

    process.exit();
  }
}

const maxPairwiseProduct = (arr) => {
  let maxIndex1 = -1;
  for (let i = 0; i < arr.length; i++){
    if(maxIndex1 === -1 || arr[i] > arr[maxIndex1]){
      maxIndex1 = i;
    }
  }
  let maxIndex2 = -1;
  for (let j = 0; j < arr.length; j++){
    if (j !== maxIndex1){
      if(arr[j] === arr[maxIndex1]){
        maxIndex2 = j;
        break;
      }
      if(maxIndex2 === -1 || arr[j] > arr[maxIndex2]){
        maxIndex2 = j;
      }
    }
  }
  return arr[maxIndex1] * arr[maxIndex2];
};

const maxPairwiseProductSlow = (arr) => {
  let result = 0;
  for(let i =0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] * arr[j] > result){
        result = arr[i] * arr[j];
      }
    }
  }
  return result;
};

const mod = {
  maxPairwiseProduct: maxPairwiseProduct,
  maxPairwiseProductSlow: maxPairwiseProductSlow
}
module.exports = mod;