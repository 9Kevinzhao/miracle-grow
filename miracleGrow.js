const Queue = require('./queue.js');
const Tree = require('./tree.js');
const Random = require('./random.js');

const miracleGrow = function(size){
    let forestSize = size;
    let plantingSeeds = new Queue
    for(let i=0;i<forestSize; i++){
        plantingSeeds.enqueue(Random().discreteRangeIn(1,100));
    }
    let Forest = new Tree(0);
    for(let i=0;i<forestSize; i++){
        Forest.add(plantingSeeds.dequeue());
}
return {Forest}
};

module.exports = miracleGrow;
let haha=new miracleGrow(5);
console.log(haha.Forest);
