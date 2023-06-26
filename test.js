"use strict";

/*Problem Statement:

Create an Employee class extending from a base class Person.  

Approach to the solution:

Create a class Person with name and age as attributes  

Add a constructor to initialize the values 

Create a class Employee extending Person with additional attributes role and contact  

The constructor of the Employee to accept the name, age, role and contact where name and age are initialized through a call to super to invoke the base class constructor  

Add a method getDetails() to display all the details of Employee. 

*/


class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person{
    constructor(name, age, role, contact){
        super(name, age);
        this.role = role;
        this.contact = contact;
    }
    getDetails(){
        document.write(`The details of employee are:<br>`
        + `Name: ${this.name} <br>`
        + `Age: ${this.age} <br>`
        + `Role: ${this.role} <br>`
        + `Contact: ${this.contact} <br>`
        )
    }
}

let employee = new Employee("Beron", 24, "Tech Analyst", "beron@gmail.com");
employee.getDetails();