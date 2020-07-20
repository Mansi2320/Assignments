console.log("Assignment qts 7");

function prime(){
    let n, i, flag = true; 
    n = Number(prompt("Enter the number"));
    for(i = 2; i <= n - 1 ; i++){
        if (n % i == 0) { 
            flag = false; 
            break; 
        } 
        else if (flag == true){
            console.log(n + " is prime"); 
        } 
        else{
            console.log(n + " is not prime"); 
        }
    } 
}    
              

prime();
