console.log("Assignment qts 8");
//nornmal function
// function ask(question , yes , no){
//     if(confirm(question)){
//         yes()
//     }else{
//         no()
//     }
// }

//Arrow Function 
let ask = (question , yes , no) => confirm(question) ? yes() : no();
 
ask('Do u agree ?',
function() {alert('You agrred');},
function() {alert('You cancelled the execution');}
);