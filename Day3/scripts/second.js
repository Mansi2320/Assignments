/*var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.
It can be said that a variable declared with var is defined throughout the program as compared to let.*/
var name = "Mansi"
var fruits = {
    name:"Mango",
    color:"Yellow",
}
console.log(fruits)
var a = 10;
console.log(a);

var a = null;
console.log(a);

/* in below example if we are doing console.log before defining the var it give us undefined as an o/p  */
console.log(x);
var x=5;
console.log(x);// it will print value of x.

/* where as in let it will give us an error  */
/*console.log(x);
let x=5;
console.log(x);*/
 
{
    let city;
    let name = "Jagruti"; 
    name = "Tejal";
    console.log("Using Let: ", name);
 }
 console.log(name)
 
 // const - Constant
// Variables defined with const behave like let variables, except they cannot be reassigned


const PI = 3.141592653589793;
/*PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
console.log(PI)*/

var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
console.log(x);

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

console.log(car);