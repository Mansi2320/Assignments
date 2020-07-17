console.log('Day 3 Assignment 3');

//using condinal statements.
function demo1(){
    let marks = Number(prompt("Enter your marks "));
    if (marks >= 60){
        console.log(`Marks is ${marks} and grade is A`)
    }else if (marks < 60 && marks >= 50 ){
        console.log(`Marks is ${marks} and grade is B`)
    }else if (marks < 50 && marks >= 40){
        console.log(`Marks is ${marks} and grade is C`)
    }else{
        console.log(`Fail`)
    }
}
demo1();
//Switch case
function demo2(){
    let marks = Number(prompt("Enter your marks "));
    switch(marks){
        case 60:
            console.log(`Marks is ${marks} and grade is A`);
            break;
        case 50:
            console.log(`Marks is ${marks} and grade is B`);
            break;
        case 40:
            console.log(`Marks is ${marks} and grade is A`);
            break;
        default:
            console.log(`Fail`);
            break;




    }    
}
demo2();

//Ternary Case
let marks = Number(prompt("Enter your marks "));
let result = (marks >= 60) ? `Marks is ${marks} and grade is A`: 
         (marks < 60 && marks >= 50) ? `Marks is ${marks} and grade is B`: 
         (marks < 50 && marks >= 40) ? `Marks is ${marks} and grade is C`:          'You  are Fail ';

 console.log(result);


