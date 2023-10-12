Data structure is the model of object for efficiency and faster memory use.

## Basic Structure 
- String
- Bool
- Int
  |Integers | Sign-magnitude representation |
  |---------|------------|
  |2|0010|
  |1|0001|
  |0|0000|
  |-0|1000|
  |-1|1001|
  |-2|1010|
- Objects
- Arrays

```bash
  
                                `Data Structure` 
  |----------------------------------------------------------------|
`Linear DS`          (how info is stored)                    `Non-Linear DS`
|---------|                                             |---------------------------|
`Static`  `Dyanamic`                                  `tree`                    `graphs`
  |          |-----------|-------|
`Array`    `Queue`    `Stack`   `Linked List`
```

**first class objects**: functionality available to variables as others. For example: array and list.

**Memory leak**: unused memory should be deallocated.

## Collection Data Structure
- Stack: It is a linear data structure where the collection of elements are stacked on top of each other.
   For example: CTRL Z
  Methods: push, pop, isFull, isEmpty, peek


-----

**Stack Memory**: it is used during the execution of the program and is deallocated with the end of program.

**Heap Memory**: it is available even after program execution.
