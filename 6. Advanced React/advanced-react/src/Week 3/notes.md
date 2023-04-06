## Composition Component

> there are two main features to enable composition component: containment and specialization

- Containment: Containment refers to the fact that some components don’t know their children ahead of time. And can also be described as generic boxes, like a Dialog or Alert.
- Specialization: Specialization defines components as being “special cases” ofother components. For example, the ConfirmationDialog is a special case of Dialog.

## Manipulating children dynamicaly in JSX

```javascript
React.cloneElement(element, [props]);
React.children.map(children, callback (child, index)=>{return child})
```

> React.cloneElementAPI enable a parent to perform

- `Modify children properties`: Props in React are immutable objects, so onceReact.cloneElement has created a copy of the element it can then modify the childrens properties in the copy.
- `Extend functionality of children components`: Props in React are immutable objects, so onceReact.cloneElement has created a copy of the element it can then extend the functionality of the children components.
- `Add to children properties`: rops in React are immutable objects, so onceReact.cloneElement has created a copy of the element it can then add to the childrens properties in the copy.

## Higher Order Component

> A HOC transforms a component into another component. In other words, it enhances or extends the capabilities of the component provided.

- It enhances or extends the capabilities of the component provided.
- You can define logic in a single place, share it across many components, and keep them unchanged and stateless.

## Testing

- ensure Quality application
- saves time and money
- discovers bugs
- maintainable

### Jest

> Jest is a JavaScript test runner that lets you access an artificial DOM called jsdom. While jsdom is only an approximation of how the browser works, it is often good enough for testing React components.

- Js test runner
- provides access to JS-DOM
- good iteration speed
- mocks the application

### React-Testing-Library

> React Testing Library is designed to fulfill all testing best practices out of the box, so that you are able to focus on the business logic your tests need to run assertions on.

- set of utilities
- fulfills best practices

# Continious Integration

> Continuous Integration (CI) is a software development technique in which developers use a version control system, like Git, and push code changes daily, multiple times a day.

- Improved developer productivity.
- Find bugs earlier and fix them faster.
- Deliver working software more often.