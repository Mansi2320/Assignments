console.log("Assignment qts 1");

for (let i = 1 ; i <= 100 ; i ++){

    if(i % 3 == 0 && i % 5 == 0){
        console.log(`For i = ${i} o/p is fizzbuzz`)
    }
    else if (i % 3 == 0){
        console.log(`For i = ${i} o/p is fizz`);
    }
    else if(i % 5 == 0){
        console.log(`For i = ${i} o/p is buzz`);
    }

}
