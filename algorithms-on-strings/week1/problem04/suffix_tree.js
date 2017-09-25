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
    trie.set(nodeIndex, new Map());
    nodeIndex++;

    for(let textIndex = 0; textIndex < text.length; textIndex++){
        let currentPattern = text.slice(textIndex, text.length);
        let currentNode = 0;

        for (let j = 0; j < currentPattern.length; j++){
            let currentSymbol = currentPattern[j];
            if (trie.get(currentNode).has(currentPattern[j])){
                currentNode = trie.get(currentNode).get(currentPattern[j]);
            }else{
                trie.set(nodeIndex, new Map());
                trie.get(currentNode).set(currentPattern[j], nodeIndex);
                currentNode = nodeIndex;
                nodeIndex++;
            }
        }
    }
    compressTrie(trie, 0, 0, new Map());
    return trie;
  }
  var called = 0;
  function compressTrie(trie, textIndex, currentNode, suffixTree){
    console.log(called++);

    let length = 0;
    while(true){
        console.log(trie.get(currentNode));
        if(trie.get(currentNode).size > 1){
            // 分岐
            suffixTree.set(currentNode, [textIndex, length]);
            for(let index of trie.get(currentNode).values()){
                compressTrie(trie, textIndex + length, index, suffixTree);
            }
        }else{
            length++;
            console.log(trie.get(currentNode)[0]);
            // currentNode = trie.get(currentNode)[0].get;
        }
    }
    console.log(suffixTree);
  }
  