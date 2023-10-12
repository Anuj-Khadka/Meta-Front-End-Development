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
-----

**Stack Memory**: it is used during the execution of the program and is deallocated with the end of program.

**Heap Memory**: it is available even after program execution.

------

## Collection Data Structure
- Stack: It is a linear data structure where the collection of elements are stacked on top of each other.<br/>
  FILO/LIFO
   For example: CTRL Z<br/>
  Methods: push, pop, isFull, isEmpty, peek

- Queue: It is a linear data structure where the elements are arranges in such a way that the first entered will be extracted first.<br/>
FIFO/LILO
  For example: Casheir
  Methods: insert, create, remove, check

- Trees: It is a complex data structure that gives the flexibility to search and add data in the collection. It provides relation between the data stored.<br/>
    Terminologies: Nodes, Parent, Root, Child, Siblings, Height, Size, Path, Leaf<br/>
    Some trees are _Binary trees, B-tree, B-plus tree_ <br/>
    Features:
      - Hierarchy
      - efficient insert and delete
      - non-linear data strucutre means more ways to transverse with data.
    Searching: Depth-first, Breadth-first<br>
    Implementations:
      - each node should have a key to identify them.
      - the child in the left should have a lower value than the parent node and the right one should have the higher value.
      - a parent can carry maximum of two childrens.
    
