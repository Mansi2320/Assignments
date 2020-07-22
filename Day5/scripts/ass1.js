console.log("Assignment qts 1");

let input = parseInt(prompt("Enter the number"));
let arr = [];
for (let i = 0 ; i < input ; i++){
    arr.push(i);
    let arr1 = arr.filter(n=> n % 2!== 0).map((n) =>(n**3));
    console.log(arr1);

}
