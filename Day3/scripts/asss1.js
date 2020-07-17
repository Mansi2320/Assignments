console.log('Day 3 Assignment 1');

function demo(){
    let number = Number(prompt("Enter the number"));
    if (number % 2 == 0){
        return (`The number is ${number} and Number is even.`)
    }else {
        return (`The number is ${number} and Number is odd.`)
    }
}

let result = demo();
console.log(result);