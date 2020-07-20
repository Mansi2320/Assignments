console.log("Assignment qts 6");

function number(){
    while (true){
        let num = Number(prompt("Enter a number greater than 100!"));

        if(num == " "){
            break;
        }

        if (num < 100 ){
            num1 = Number(prompt("Invalid!! , Enter number as per the condition"));
            return console.log(num1);
        }
        else if(num >= 100){
            return console.log(num);
        }
        break;
        }
        
    }

number();