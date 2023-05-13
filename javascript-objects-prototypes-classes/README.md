# Notes for JS: Objects, Prototypes, and Classes

Course: JavaScript Objects, Prototypes, and Classes
[Link](https://app.pluralsight.com/library/courses/javascript-objects-prototypes-classes/table-of-contents)

## Table of Contents
- [ Creating Javascript Objects](#creating-javascript-objects)
- [ JavaScript object properties](#javaScript-object-properties)
- [ JavaScript prototypes and interfaces](#javaScript-prototypes-and-interfaces)
- [ JavaScript classes](#javaScript-classes)
- [ User built-in JavaScript objects](#user-built-in-javaScript-objects)


## Creating Javascript Objects

1. **Using Object literals**: You can create an object using the object literal syntax. This is the most common way to create an object.
    ```javascript
    const person = {
        name: 'John',
        age: 32,
        partTime: false,
        showInfo: function(realAge) {
            console.log(`${this.name} is ${realAge}`);
        }
    };
    ```
    Javascript objects are dynamic. You can add properties to an object at any time. Unlike statically typed languages, you don't have to declare the properties of an object before using them like you would in Java or C#.
    **Note:** This is a powerful feature as you don't have to define the structure of an object before using it but the issue with that is, you JS code can't be validated by a compiler. You can't be sure that the object you are using has the properties you expect it to have. This can lead to runtime errors.

2. **Using shorthand syntax**: You can create an object using shorthand property names. This is less common.
    ```javascript
    let createUser = function(firstName, lastName, age) {
        let person = {
            firstName,
            lastName,
            age
        };
        display(person); // {firstName: "John", lastName: "Doe", age: 32}
    };
    ```
    The above code is equivalent to:
    ```javascript
    let createUser = function(firstName, lastName, age) {
        let person = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        display(person); // {firstName: "John", lastName: "Doe", age: 32}
    };
    ```

    **Note:** The shorthand property names are useful when you want to create an object using variables. You can use the variable name as the property name and the variable value as the property value.

    **Applying shorthand to functions**
    ```javascript
    let person = {
        ...
        showInfo() {
            console.log(`${this.firstName} is ${this.age}`);
        }
    };
    ```
    The above code is equivalent to:
    ```javascript
    let person = {
        ...
        showInfo: function() {
            console.log(`${this.firstName} is ${this.age}`);
        }
    };
    ```
    **Important:** The shorthand syntax for functions is only available in object literals and classes. You can't use it in other places like when you are passing a function as an argument to another function.

3. **Using the new keyword**: You can create an object using the new keyword. This is less common.
    ```javascript
    const person = new Object();
    person.name = 'John';
    person.age = 32;
    person.partTime = false;
    person.showInfo = function(realAge) {
        console.log(`${this.name} is ${realAge}`);
    };
    ```

4. **Using a constructor function**: You can create an object using a constructor function. This is less common.
    ```javascript
    function Person(name, age, partTime) {
        this.name = name;
        this.age = age;
        this.partTime = partTime;
        this.showInfo = function(realAge) {
            console.log(`${this.name} is ${realAge}`);
        };
    }
    const john = new Person('John', 32, false);
    ```
    **Note:** The constructor function is a regular function. The only difference is that it is called using the new keyword. When you call a function using the new keyword, the following things happen:
    - A new empty object is created.
    - The new object is passed to the function as the this parameter.
    - The function executes.
    - The new object is returned from the function.

    **Important:** The constructor function is a regular function. You can call it without the new keyword. If you do that, the this parameter will be set to the global object (window in the browser). This can lead to unexpected results.

5. **Object Prototype:** Object (with big `O`) is a prototype (we will learn later) is inherited by all objects in JavaScript. It contains common properties and methods that are available to all objects. For example, all objects have the toString() method. This method is defined in the Object prototype. You can call it on any object.
    ```javascript
    const person = {
        name: 'John',
        age: 32,
        partTime: false,
        showInfo: function(realAge) {
            console.log(`${this.name} is ${realAge}`);
        }
    };
    person.toString(); // [object Object]
    ```
    **Note:** The toString() method returns a string representation of an object. The default implementation returns [object Object]. You can override this method to return a custom string representation of an object.

    **Important:** The Object prototype is the root of the prototype chain. All objects inherit from it. It is the only object that doesn't have a prototype. The prototype of an object is the object that it inherits from. You can access the prototype of an object using the Object.getPrototypeOf() method.
    ```javascript
    const prototype = Object.getPrototypeOf(person);
    display(prototype); // {constructor: ƒ, toString: ƒ}
    ```
    **Note:** The prototype of an object is the object that it inherits from. You can access the prototype of an object using the Object.getPrototypeOf() method.

    `Object.keys()` method returns an array of the object's own properties. It doesn't include the properties that are inherited from the prototype chain.
    ```javascript
    const keys = Object.keys(person);
    display(keys); // ["name", "age", "partTime", "showInfo"]
    ```

