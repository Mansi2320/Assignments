console.log("Assignment qts 4");

// method 1 
function add () {
    num1 = Number(prompt("Enter num 1"));
    num2 = Number(prompt(" Enter num2 "));
    return num1+num2;
}
function sub () {
    num1 = Number(prompt("Enter num 1"));
    num2 = Number(prompt(" Enter num2 "));
    return num1-num2;
}
function multiply () {
    num1 = Number(prompt("Enter num 1"));
    num2 = Number(prompt(" Enter num2 "));
    return num1*num2;
}
function divide () {
    num1 = Number(prompt("Enter num 1"));
    num2 = Number(prompt(" Enter num2 "));
    return num1/num2;
}
function percentage () {
    num1 = Number(prompt("Enter num 1"));
    num2 = Number(prompt(" Enter num2 "));
    return num1*100/num2;
}
function sqroot () {
    num = Number(prompt("Enter num "));
    return Math.sqrt(num);
}

function calculator(){
    let input = prompt("Enter the operation u want to perform");
    switch(input){
        case '+' :
           let result =  add()
           console.log(parseFloat(result));
           break;
        case '-' :
           let results =  sub()
           console.log(parseFloat(results));
           break;
        case '*' :
           let result1 =  multiply() 
           console.log(parseFloat(result1));
           break;
        case '/' :
           let ans  =  divide()
           console.log(parseFloat(ans));
           break;
        case '%' :
           let result2 =  percentage()
           console.log(parseFloat(result2));           
           break;
        case '^' :
           let result3 = sqroot()
           console.log(parseFloat(result3)); 
           break;
        default:
           console.log(`0.00`);
           break;
    


    }
}
calculator();
