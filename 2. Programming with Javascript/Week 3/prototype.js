// creating a prototype

var bird ={
    hasWings : true,
    canFly : true,
    hasFeathers : true,
}


// instantiating a new bird 

var eagle = Object.create(bird);

console.log(eagle.canFly);


// making some changes to the instance 

var penguin = Object.create(bird);
penguin.canFly = false;

console.log(penguin.canFly)
console.log(penguin.hasFeathers)
