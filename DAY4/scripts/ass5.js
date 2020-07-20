console.log("Assignment qts 5");

function salesdept(){
    let sales = Number(prompt("Enter the number of sales done"));
    if (sales >= 0 && sales <= 5000){
        let commision = sales * 0.02;
        return console.log(`The sale done is of ${sales} and the employee gets a commision of ${commision} `);
    }
    else if(sales >= 5001 && sales <= 10000){
        commision = (5000 * 0.02)+((sales - 5000) * 0.05)
        return console.log(`The sale done is of ${sales} and the employee gets a commision of ${commision}`);
    }
    else if(sales >= 10001 && sales <= 20000){
        commision = (5000 * 0.05) + (5000 * 0.02) +((sales - 10000) * 0.07)
        return console.log(`The sale done is of ${sales} and the employee gets a commision of ${commision}`);

    }
    else{
        commision = (5000 * 0.05) + (5000 * 0.02) + (10000 * 0.07) + ((sales - 20000) * 0.1)

        return console.log(`The sale done is of ${sales} and the employee gets a commision of ${commision} `);

    }
}
salesdept();
    

