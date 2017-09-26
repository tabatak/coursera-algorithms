const reader = require('readline').createInterface({
input: process.stdin,
output: process.stdout
});

let getNodeIndex = (function(){
    let idx = 0;
    return () => {return idx++};
})();

let lines = [];

reader.on('line', (line) => {
    lines.push(line);
});
reader.on('close', () => {
    const text = lines[0];

    const trie = buildTrie2(text);
    // printTrie(trie, text);
    console.log(trie);
});

function buildTrie2(text){
    let trie = new Map();
    trie.set(getNodeIndex(), new Map());
    for(let textIndex = 0; textIndex < text.length; textIndex++){
        let currentPattern = text.slice(textIndex, text.length);
        let currentNode = 0;
        for (let j = 0; j < currentPattern.length; j++){
            let currentSymbol = currentPattern[j];
            if (trie.get(currentNode).has(currentPattern[j])){
                currentNode = trie.get(currentNode).get(currentPattern[j]);
            }else{
                const nodeIndex = getNodeIndex();
                trie.set(nodeIndex, new Map());
                trie.get(currentNode).set(currentPattern[j], nodeIndex);
                currentNode = nodeIndex;
            }
        }
    }
    return trie;
}

function buildTrie(text){
    // とりあえずtext から trieを作成してみる
    let trie = new Map();
    trie.set(getNodeIndex(), new Map());

    for(let textIndex = 0; textIndex < text.length; textIndex++){
        let currentNode = 0;
        for (let startIndex = textIndex; startIndex < text.length; startIndex++){
            let key = Array.from(trie.get(currentNode).keys()).find((key) => text[key] === text[startIndex]);
            if (key){
                currentNode = trie.get(currentNode).get(key);
            }else{
                let nodeIndex = getNodeIndex();
                trie.set(nodeIndex, new Map());
                trie.get(currentNode).set(startIndex, nodeIndex);
                currentNode = nodeIndex;
            }
        }
    }
    return trie;
}

function printTrie(trie, text){
    for(let nodeIndex of trie.keys()){
        let node = trie.get(nodeIndex);
        for(let key of node.keys()){
            console.log(`${nodeIndex}->${node.get(key)}:${text[key]}`);
        }      
    }
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
