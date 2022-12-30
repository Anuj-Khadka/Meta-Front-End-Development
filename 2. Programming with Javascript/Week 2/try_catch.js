// try catch statement alows the code to run smoothly even when the error is setected 
// some error types are:
// reference error
// type error
// syntax error
// range error


// try will be executed because there is no error in it at all. 
// try{
//     console.log(2+2);
// } catch(err){
//     console.log(err)
// }

// try block wont be executed because there is no reference to a and b variables.
// try{
//     console.log(a + b);
// } catch(err){
//     console.log(err)
// }
// console.log("still runs");

try{
    throw new ReferenceError;
} catch(err){
    console.log(err);
    console.log("there is an error in the code");
}
console.log("yet the code runs haha")
