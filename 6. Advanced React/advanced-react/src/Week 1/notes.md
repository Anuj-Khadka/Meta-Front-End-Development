# Transforming List in JavaScript

## map()

- used to transform lists of data.
- display data fetched from a third party or external provider differently in your app is a common use case of the map() method.
- When using the map() method, you will need to define a new variable, as it always returns a new array.

## sort() method

> it sorts an array based on the comparison function provided.

| compareFn(a, b) return value | sort order                     |
| ---------------------------- | ------------------------------ |
| >0                           | sort a after b                 |
| < 0                          | sort a before b                |
| === 0                        | keep original order of a and b |

```javascript
const sortArr = arr.sort((a, b) => {
  return a.calories - b.calories;
});
```

## Keys in React

- Keys help React determine which items have changed, are added or are removed.
- Keys instruct React about whether a specific element’s internal state should be preserved or not.
- Keys instruct React how to treat a specific element when an update occurs.
*Although item indexes can be used as keys, using indexes as keys can create problems if the order of your list of items is prone to change and can negatively affect performance. Using unique and stable identifiers, such as item IDs, is recommended instead.*


## Controlled Components:
> State delegation is performed via the value prop. A combination of local state and the value prop is needed to create a controlled component.  

```Javascript
// uncontrolled component ----- using ref to access value
const Form = () => { 
 const inputRef = useRef(null); 

 const handleSubmit = () => { 
   const inputValue = inputRef.current.value; 
   // Do something with the value 
 } 
 return ( 
   <form onSubmit={handleSubmit}> 
     <input ref={inputRef} type="text" /> 
   </form> 
 ); 
};


// controlled component  --- using function to access value
const Form = () => { 
 const [value, setValue] = useState(""); 

 const handleChange = (e) => { 
   setValue(e.target.value) 
 } 

 return ( 
   <form> 
     <input 
       value={value} 
       onChange={handleChange} 
       type="text" 
     /> 
   </form> 
 ); 
}; 
```