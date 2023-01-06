// making a constructor
// constructor is used to add all the parameter datas when the class is instantiate(made a new instant)

// function car(number, color, seat, milage){
//     this.number = number;
//     this.color = color;
//     this.seat = seat;
//     this.milage = milage;

//     this.start = function start(){
//         return `the car with number ${this.number} is starting`;
//     }
// }

// let auto = new car(111, "red", 2, 120);
// console.log(auto.start());

// creating class

class car {
  constructor(number, color, seat, milage) {
    this.number = number;
    this.color = color;
    this.seat = seat;
    this.milage = milage;

    this.start = function start() {
      return `the car with number ${this.number} is starting`;
    };
  }
  buy() {
    return `I bought this car`;
  }
}

let auto = new car(111, "red", 2, 120);
console.log(auto.buy());

var myCar = Object.create(car)      // another way of instantiating a class
console.log (car)

