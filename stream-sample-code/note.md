```javascript

let obj = {
    student1: "Alex",
    student2: "John",
    student3: "Richard"
}

let numArr = [1, 2, 3, 4];

let empArr = ["Johnson", 105678, "Chicago"];
let empArr2 = empArr;
console.log(empArr2);//[ 'Johnson', 105678, 'Chicago' ]
empArr2[0] = "Richard";
console.log(empArr2);//[ 'Richard', 105678, 'Chicago' ]
console.log(empArr);//[ 'Richard', 105678, 'Chicago' ]

let empArr3 = [...empArr];
empArr3[0] = "Alex";
console.log(empArr3);//[ 'Alex', 105678, 'Chicago' ]
console.log(empArr);//[ 'Richard', 105678, 'Chicago' ]
```


const array1 = [1, 2, 3, 4];

function sum(acc, crr){
    console.log(acc, crr);
    return acc + crr;
}
const initialValue = 0;
const sumWithInitial = array1.reduce(sum(acc, crr), initialValue);
  5
);


console.log(sumWithInitial);

```javascript

doSomething(function(result){
	doSomethingElse(result,function(newResult){
		doThirfThing(newResult,function(finalResult){
			console.log('Print the final result ' +finalResult);
		}, failureCallback);
	}, failurCallback);
}, failureCallback);



firstPromise().then(function(result){
    return secondPromise(result);
}).then(function(newResult){
    return thirdPromise(newResult);
}).then(function(finalResult){
    console.log('Print the final result ' +finalResult);
}).catch(failureCallback);



async function hello(): Promise<any> {
    //Value will be wrapped in a resolved promise and returned
    return "Hello Async";
}



getResponse().then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
});



```