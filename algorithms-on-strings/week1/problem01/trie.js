const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];

reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  let trie = buildTrie2(lines);
  printTrie(trie);
});



function buildTrie(patterns){
  let nodeIndex = 0;
  let trie = new Map();
  trie.set(nodeIndex.toString(), new Map());
  nodeIndex++;
  for(let i = 1; i < patterns.length; i++){
    let currentNode = 0;
    let currentPattern = patterns[i];

    for (let j = 0; j < currentPattern.length; j++){
      let currentSymbol = currentPattern[j];
      if (trie.get(currentNode.toString()).has(currentSymbol)){
        // currentNodeを参照先に移動する
        currentNode = trie.get(currentNode.toString()).get(currentSymbol);
        
      }else{
        // 新しいnodeの追加
        trie.set(nodeIndex.toString(), new Map());
        
        // 新しいnodeへの参照の追加
        trie.get(currentNode.toString()).set(currentSymbol, nodeIndex);

        currentNode = nodeIndex;
        nodeIndex++;
      }
    }
  }
  return trie;
}

function buildTrie2(patterns){
  let nodeIndex = 0;
  let trie = new Map();
  trie.set(nodeIndex, new Map());
  nodeIndex++;
  for(let i = 1; i < patterns.length; i++){
    let currentNode = 0;
    let currentPattern = patterns[i];

    for (let j = 0; j < currentPattern.length; j++){
      let currentSymbol = currentPattern[j];
      if (trie.get(currentNode).has(currentSymbol)){
        // currentNodeを参照先に移動する
        currentNode = trie.get(currentNode).get(currentSymbol);
        
      }else{
        // 新しいnodeの追加
        trie.set(nodeIndex, new Map());
        
        // 新しいnodeへの参照の追加
        trie.get(currentNode).set(currentSymbol, nodeIndex);

        currentNode = nodeIndex;
        nodeIndex++;
      }
    }
  }
  return trie;
}


function printTrie(trie){
  for(let nodeIndex of trie.keys()){
    let node = trie.get(nodeIndex);
    for(let char of node.keys()){
      console.log(`${nodeIndex}->${node.get(char)}:${char}`);
    }      
  }
}
