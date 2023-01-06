
// function meal(animal) {
//     animal.food = animal.food + 10;
// }

// var dog = {
//     food: 10
// };
// meal(dog);
// meal(dog);

// console.log(dog.food);




class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal {
    constructor() {
        super(4);
    }
}

var result = new Dog();
console.log(result.legs);
