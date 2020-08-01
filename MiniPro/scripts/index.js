console.log("To Do List");

const inpkey = document.getElementById('inpkey');
const inpvalue = document.getElementById('inpvalue');
const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const lsStorage = document.getElementById('lsStorage');



btn.onclick = ()=>{
    const key = inpkey.value;
    const value = inpvalue.value;
    
    if(key && value){
        localStorage.setItem(key , value);
        location.reload();
    }
};

    for(let i = 0; i < localStorage.length; i++){

        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        lsStorage.innerHTML += `${key} : ${value}</br>`;

    }

btn1.onclick = ()=>{
     let arr = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        arr.push(key);
    }
    for (let i = 0; i < arr.length; i++) {
        localStorage.removeItem(arr[i]);
    }
 }
    

    
     


     
