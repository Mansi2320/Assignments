/* a program that will display the multiplication table of a number on the webpage in a proper format. Take the input from the user. 
Input - 5 
Output - 5 x 1 = 5 
   5 x 2 = 10  
    and so on… */


function multiply(){
    let number = parseInt(prompt("Enter the number "));
    let h3 = document.getElementById('table');
    for(let i = 1 ; i <= 10 ; i++){
        let multiply = number * i ;
        let result = `${number} x ${i} = ${multiply}`;
        h3.innerHTML += `<li>${result}</li>`
        console.log(result);



    }
        
    
}
multiply();