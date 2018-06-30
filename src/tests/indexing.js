
const { BTree, BinaryBTree, AsyncBinaryBTree } = require('acebase/src/data-index');
const index = new BTree(3, true);

let keys = [10, 20, 40, 50, 60, 70, 80, 30, 35, 5, 15];
keys.forEach(key => {
    index.add(key, `value ${key}`);
});

let all = index.root.all()
console.log(all);

// let matches = index.root.search("between", [35, 55]);
// console.log(matches);

matches = index.root.search(">=", 50);
console.log(matches);

matches = index.root.search("!=", 50);
console.log(matches);

matches = index.root.search("==", 50);
console.log(matches);

matches = index.root.search("<", 50);
console.log(matches);

keys.forEach(key => {
    const val = index.find(key);
    console.log(val);
});
let binary = index.toBinary();
console.log(binary);

// let binaryIndex = new BinaryBTree(binary);
// keys.forEach(key => {
//     const val = binaryIndex.find(key);
//     console.log(val);
// });

let asyncIndex = new AsyncBinaryBTree(binary);
keys.forEach(key => {
    asyncIndex.find(key).then(val => {
        console.log(val);
    });
});