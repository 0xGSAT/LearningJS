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

2. **Using the new keyword**: You can create an object using the new keyword. This is less common.
    ```javascript
    const person = new Object();
    person.name = 'John';
    person.age = 32;
    person.partTime = false;
    person.showInfo = function(realAge) {
        console.log(`${this.name} is ${realAge}`);
    };
    ```



