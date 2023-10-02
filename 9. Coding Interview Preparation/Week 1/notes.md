## Before coding interview, keep in mind
- prepare to succeed
	- jot down the major points
	- be vocal
	- try eqating problem with the one you know
	- try breaking the problems
- solve the problem conceptually
- employ approate tool
- optimize the solution


## STAR Method
- Situation - Problem or challenges being faced
- Task - responsibilities and assignments
- Action - how you overcame the problem, address the challenges
- Result - final outcome of your actions

## Introduction to Computer Science
### Decimal 
- oldest system
- base 10
- based on 10 toes and 10 fingers
- 0-9

|Name | Common Notations | Match Notation | |
|---|---|---|---|
|Ones|1|10^0||
|Tens|10|10^1|10 * 1|
|Hundreds|100|10^2|10*10*10|
|Thousands|1000|10^3|10*10*10*10|

_positional notation - use of positive of a number to denote progressive increase._

### Binary
- 8 bits = 1 byte
- 0 and 1
- add 1 to the left to increase the number value

|Digits|Binary|Remarks|
|---|---|---|
|0|0|start at 0|
|1|1|then 1|
|2|10|start back at 0, but add 1 to left|
|3|11||
|4|100|"|
|5|101||
|6|110||
|7|111|"|
|8|1000||
|9|1001||
|10|1010||

## Memory
`Computer` ---> `Memory Blocks` --> `Instructions` and `Informations`

`Memory Capacity` - no. of bytes the computer can hold.
`Transfer Rate` - speed in which the computer can transfer data to the cache.

Memory:
- **Cache Memory**: Expensive, Stores memory, effective and time saving
  	`Computer` ------> `|Cache Zone 1|` `|Cache Zone 2|` `|Cache Zone 3|` `|Cache Zone 4|`
  	---------------------importance decreasing------------------------------------>
- **Main Memory**: stores only info computer is currently processing, may be volatile(loses memory with computer off) or non-volatile, ROM is most busy, RAM is programmable
  	`RAM size ~ Transfer Rate`
- **Secondary Memory**: External memory, slow and requires transfering of data to RAM.
  

## Time Complexity
`Big O notation` 
- determines an algorithm's effiency
- gives and estimates how long a code will take to wun on different inputs.
- O(1), O(log logn), O(log n), O(n), O(nlogn), O(2n), O(n^2)

### O(1) - constant time
-> no matter what is entered, it takes only one computation. 
```python
 print array[0]
 ```
### O(n) - linear time 
-> search loop = no. of element in array, n computations
```python
for i = 0 to 10:
	if arr[i] == target:
		print target
```

### O(log n) - binary search 
-> the computation halves on every run, if we were to guess number between 1 to 100.
<br/>
| 50 - too high` | `25 - too high` | `12 - too high`|
|---|---|---|
|----------------halves everything--------------------|

### O(n^2)
```python
for i to len(outer_arr):
	for j to len(inner_arr):
		if array[i][j] == target:
			print target
```
