console.log("Assignment qts 3");

 async function fetchTodo(){
    await fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response=>response.json)
    .then(data=> {console.log(data);
     
    for(let i = 0 ; i < data.length ; i++){
        if(data[i].completed == true){
            console.log(data[i]);
        }
    }
    }).catch(error=>console.log(error))
}

fetchTodo();