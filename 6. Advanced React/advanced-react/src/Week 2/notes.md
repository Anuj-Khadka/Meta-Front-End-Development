## Some rules for hooks:

- call hooks only on the React functions
- call hooks only at the top level
- multiple state or effect hooks are allowed
- make multiple hook call in a sequence

## useState

- When using the useState hook, you must use the state-updating function to update state.
- The useState hook’s return value in React is the array data structure.
- The useState hook allows you to work with state in components.
- The useState hook invocation returns a two-member array.

_You can use an object with multiple properties as the initial value of the state variable, just like the formData state variable in the example, where the useState hook was invoked with the object containing two properties (the goal property and the by property)._


## useReducer
> The useReducer hook gets an initial state and a reducer function.  
