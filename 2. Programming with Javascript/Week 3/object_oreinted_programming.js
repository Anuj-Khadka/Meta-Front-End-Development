// functional method

// let shoesQuantity = 100;
// let stateTax = 1.2;

// function shoesRate(shoesQuantity, stateTax){
//     return shoesQuantity * stateTax;
// }

// let shoesPrice = shoesRate(shoesQuantity,stateTax);
// console.log(shoesPrice);



// OOP-1

var purchase1 = {
    shoesQuantity : 100,
    stateTax : 1.2,
    shoesRate : function(){
        var shoesPrice = purchase1.shoesQuantity * purchase1.stateTax;
        console.log(shoesPrice);
    }
}
purchase1.shoesRate();

var purchase2 = {
    shoesQuantity : 50,
    stateTax : 1.2,
    shoesRate : function(){
        var shoesPrice = purchase2.shoesQuantity * purchase2.stateTax;
        console.log(shoesPrice);
    }
}
purchase2.shoesRate();



// OOP-2 

var purchase = {
    shoesQuantity : 10,
    stateTax : 1.2,
    shoesRate : function(){
        var shoesPrice = this.shoesQuantity * this.stateTax;
        console.log(shoesPrice);
    }
}
purchase.shoesRate();