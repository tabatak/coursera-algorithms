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
  
    const trie = buildTrie(text);

    console.log(trie);
  });
  
  function buildTrie(text){
    // とりあえずtext から trieを作成してみる
    let nodeIndex = 0;
    let trie = new Map();
    trie.set(nodeIndex.toString(), new Map());
    nodeIndex++;

    for(let i = 0; i < text.length; i++){
        let currentPattern = text.slice(i, text.length);
        let currentNode = 0;

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
                trie.get(currentNode.toString()).set('$', `${i}`);
            }
        }
    }
    return trie;
  }
  