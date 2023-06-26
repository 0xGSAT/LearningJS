/*
Functions✅
Classes
Event Handling
Objects
Iterables
Async Programming
Modular Programming
Security
*/

## Arrow Function:

Arrow function also adds a great difference with respect to the context object - `this` reference.
Consider the below code where a regular function is defined within a method:

```javascript
const myObject = {
  items: [1],
  myMethod() {
    console.log(this == myObject) // true
    this.items.forEach(function() {
      console.log(this === myObject) // false
      console.log(this === window); // true
    });
  }
};
myObject.myMethod();
```

A regular function defines its 'this' value based on how the function is invoked.

In the above-mentioned example, the myObject defines 'this' as an instance of itself. So, in line 4, the reference to `this` points to the myObject itself. The regular function is used within the forEach() method. So, inside of the regular function, 'this' points to the window global object.
If the same logic is re-written using the arrow function as below:


```javascript
const myObject = {
    items: [1],
    myMethod() {
      console.log(this == myObject) // => true
      this.items.forEach(() => {
        console.log(this === myObject) // => true
        console.log(this === window); // => false
      });
    }
  };
  myObject.myMethod();
```

Arrow functions do not have their own 'this'. If 'this' is accessed, then its value is taken from the outside of the arrow function. So, in the above-mentioned code, the value of 'this' inside the arrow function equals to the value of 'this' of the outer function, that is, myObject.


Rest parameter in function
The rest of the parameters can be included in the function definition by using three dots ( … ) followed by the name of the array that will hold them. 
```javascript
function showNumbers(x, y, …z) {
    return z;
}
console.log(showNumbers(1, 2, 3, 4, 5)); // [3,4,5]
console.log(showNumbers(3, 4, 5, 6, 7, 8, 9, 10)); // [5,6,7,8,9,10]
```

**The rest parameter should always be the last parameter in the function definition.**

callAPI().then( (response) => {
    // code goes here axios
    // HTTP code, data, header etc.
} )

callAPI().then( ({ data }) => {
    let returnedAnswer = data
} )

3x3

1   2   3
4   5   6
7   8   9

for row = 0,1,2
    for col = 0,1,2
        print ( matrix(row, col) )