let rank = 5;

switch(rank){
    case 1: 
        console.log("You are #1");
    
    case 2: 
        console.log("You are #2");
        break;
    case 3: 
        console.log("You are #3");
        break;
    default: 
        console.log("No rank"); 
} 



// Output: No rank





let isRainyDay = true;

if(isRainyDay === true){
    console.log("Take an umbrella");
}

if(isRainyDay !== true){
    console.log("Grab Sun glasses");
}


let age = 20;

if(age >= 20){
    console.log("You can vote");
} else if(age < 18){
    console.log("No Drinking!")
} else{
    console.log("You can vote but not drink.")
}




10 == "10"
10 === "10"
10 === 10
"10" === "10"

console.log(true && true)
true && true
true && false
!true
!!true



let citizen = (age > 60)? "Senior citizen": "Normal citizen";  // (cond)? "if true": "if false"

/*
let citizen2;

if(age > 60){
    citizen2 = "Senior citizen";
} else {
    citizen2 = "Normal citizen";
}

console.log(citizen2);// non cond
*/


let workingHours = 9.20; 
let additionalHours; 
(workingHours > 9.15) ? additionalHours = "You have positive additional hours" : additionalHours = "You have negative additional hours"; 
// (cond) ? expression for true : expression for false
/* if (9.20 > 9.15) {
    additionalHours = "You have positive additional hours"
} else {
     additionalHours = "You have negative additional hours";
}
*/

if(workingHours > 8){
    alert("Overtime!");
}

console.log(additionalHours); 


let choice = 1;
let tempFahrenheit = 104;
const THIRTYTWO = 32;
const TEMP = 1.8;
const NORMAL_CELSIUS = 37;
let result1 = tempFahrenheit - THIRTYTWO;
let result2 = result1 / TEMP; // My body temp in Cel

switch (choice) {
	case 1:
		document.write("Your body temperature in Celsius is: " + result2 + "<br>");
		result2 > NORMAL_CELSIUS ? document.write("You have fever, take rest!")
			: document.write("You are absolutely OK!! Enjoy");
		break;
	case 2:
		document.write("No, I don't want to check whether i have fever or not<br>");
		break;
	default:
		document.write("Sorry wrong choice provided<br>");
}
