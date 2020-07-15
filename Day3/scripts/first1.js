console.log("Hello , i'm testing console methods ");

var a = {name:"Mansi", age:"20", city:"India"}
var b = {name:"Jagruti", age:"20", city:"India"}
var c = {name:"Gaurav", age:"20", city:"India"}

//console.log({a,b,c});
console.table({a,b,c});
console.log('%c Imp message','color:blue;')
console.error("Hey there is an error");
console.warn("This is the last warning!")

var food = {street :'pav bhaji', junk : 'burger' , home : 'dal khichdi'}
 console.dir(document.location);

 console.info("This is imp info about js" ,);

 console.trace(food)

 console.log('the word is %s', 'foo');
 console.assert(false, 'the word is %s', 'foo');

 console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");

