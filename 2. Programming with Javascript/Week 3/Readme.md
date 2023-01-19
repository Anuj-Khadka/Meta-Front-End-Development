# Programming Paradigm

## Functional Programming
> The function and data are seperately written.
```javascript
// code yourself
```


## Object-Oreinted Programming
> The function and data are collectively written within an object.


## Recursion
> the functions that calls itself is known as recursive function.

## Scope
> determines which part of the code are accessible and which are not. `Global Scope` & `Local Scope` 
> Variables created within the local scope cannot be read by code at the global scope level. They are accessible only to functions located within the local scope.  

* `var`:
* `let`:
* `const`:

When you use `let` and `const` to declare a variable, it is scoped to the block - even within if statements and loops, like the for or while loops. Therefore, the quantity variable you create will only exist within the for loop.**

 **The `this` keyword is an alias for the name of the object.**


 # Principal of OOP

 * Inheritance
 * Encapsulatio
 * Polymorphism
 * Abstraction



In other words, if you compare `new String('plum') === new String('plum')`, you'll get back *false*, while `"plum" === "plum"` returns *true*. You're getting the false when comparing objects because it is not the values that you pass to the constructor that are being compared, but rather the memory location where objects are saved.

To use a constructor function, I must prepend it with the operator new. For example, to create a new instance of the Date object, I can run: `new Date()`. What I get back is the current datetime. However, not all the built-in objects come with a constructor function. An example of such an object type is the built-in Math object. Running `new Math()` throws an Uncaught TypeError, informing us that Math is not a constructor.

 **Instead of using Array, Function, and RegExp constructors, you should use their array literal, function literal, and pattern literal varieties: [], () {}, and /()/.**

 # Prototype
 > prototype is an object that can be created to make other objects of its own form.

 # Designing an OOP
>                 Animal
>                /     \
>            Cat          Bird
>            /  \           \
>     HouseCat   Tiger      Parrot
>    
