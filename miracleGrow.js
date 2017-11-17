const Queue = require('./queue.js');
const Tree = require('./tree.js');
const Random = require('./random.js');

const miracleGrow = function(size){
    let forestSize = size;
    let plantingSeeds = new Queue();
    console.log("my queue is ");
    for(let i=0;i<forestSize; i++){
        console.log(Random().discreteRangeIn(1,100));
        plantingSeeds.enqueue(Random().discreteRangeIn(1,100));
    }
    console.log("===============");
    console.log("queue over");
    let Forest = new Tree(0);
    console.log("this is my tree");
    console.log(Forest);
    for(let i=0;i<forestSize; i++){
        console.log(plantingSeeds.dequeue());
        let leaf = new Tree(plantingSeeds.dequeue());
        Forest.add(leaf);
}
return Forest;
};

module.exports = miracleGrow;
let haha=new miracleGrow(5);
console.log(haha);
