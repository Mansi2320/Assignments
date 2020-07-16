let text = "The quick brown fox jumps over the wall";
console.log(text.split('e'));

// substring
console.log(text.substring(2 , 6));

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);

str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n);

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
console.log(text3);

var str = "       Hello World!        ";
alert(str.trim());

//Array 
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits
console.log(fruits);


let x = fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
console.log(x);

let citrus = fruits.slice(1);
console.log(citrus);

var arr1 = ["Emil", "Tobias", "Linus"];
var myChildren = arr1.concat("Peter"); 
console.log(myChildren);

fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"
console.log(fruits);
fruits[fruits.length] = "grapes";          // Appends "Kiwi" to fruits
console.log(fruits);



