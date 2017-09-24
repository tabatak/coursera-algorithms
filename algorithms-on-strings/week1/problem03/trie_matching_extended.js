const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];

reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const text = lines[0];
  const num = lines[1];
  const patterns = lines.slice(2, lines.length);

  const patternTrie = buildTrie(patterns);
  const matchedIndexes = prefixTrieMatching(text, patternTrie);
  console.log(matchedIndexes.join(' '));
});

function buildTrie(patterns){
  let nodeIndex = 0;
  let trie = new Map();
  trie.set(nodeIndex.toString(), new Map());
  nodeIndex++;
  for(let i = 0; i < patterns.length; i++){
    let currentNode = 0;
    let currentPattern = patterns[i];
    for (let j = 0; j < currentPattern.length; j++){
      let currentSymbol = currentPattern[j];
      if (trie.get(currentNode.toString()).has(currentSymbol)){
        currentNode = trie.get(currentNode.toString()).get(currentSymbol);
      }else{
        trie.set(nodeIndex.toString(), new Map());
        trie.get(currentNode.toString()).set(currentSymbol, nodeIndex.toString());
        currentNode = nodeIndex;
        nodeIndex++;
      }
      // 終端を追加
      if (j === currentPattern.length - 1 ){
        trie.get(currentNode.toString()).set('$', '');
      }
    }
  }
  return trie;
}

function prefixTrieMatching(text, trie){
  let startIndex = 0;
  let ret = [];
  for (let i =0; i < text.length; i++){
    let currentIndex = startIndex;
    let symbol = text[currentIndex];
    currentIndex++;
    let v = trie.get('0');
    while(true){
      if(v.has('$')){
        ret.push(startIndex);
        break;
      }else if (v.has(symbol)) {
        v = trie.get(v.get(symbol));
        symbol = text[currentIndex];
        currentIndex++;
      }else{
        break;
      }
    }
    startIndex++;
  }
  return ret;
}