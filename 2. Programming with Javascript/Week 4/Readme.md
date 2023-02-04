>  Node.js can run in multiple settings, for example, on the command line, in a desktop application, or on the back-end of a web app (on a server). And it's a completely separate, standalone environment without ties to the JavaScript in the browser. 


# Testing 
> checking if the code ready for production really satisfied the given requirements or not.
* bug free
* satisfies requirement
* doesn't break existing features

## Refactoring
> process of writing feature code making it easy to read and understand without changing output.

## Types of testing
* `end-to-end(e2e) testing`: imitates how a user might interact or behave with the app. It is slowest. For Example: *Cypress*, *Webdriver JS*.

* `Integration testing`: test how a part of a system interacts with other parts. It is cheaper and faster compared to e2e. For Example: *React Integration Library*, *Enzyme*.

* `Unit testing`: testing smallest piece of code separately or in isoation(like a function). It is fast and easy to write. For Example: *Jest*.

### Jest
> It is a JavaScript testing framework to test JS code like Reat, Babble, Node, Typescript etc.
* code coverage: total percentage of code that is covered for testing.
* mocking: allows to separate the code from relative dependencies.
* snapshot testing: verify that there are no regression in the DOM after change in codebase.

## Test-Driven Development
> streamlined process of writing code that will satisfy some requirements.
### Steps:
1. read requirements
2. write failing test           {red}
3. update source code
4. run the test to pass         {green}
5. refactor implementation      {refactor}

### Advantages:
* minimize regression
* automate test
* documentation