/*Make a webpage that will ask the name of the user. Then will display a welcome message on the webpage. Also the webpage should also have a clock. 
Using the toggle method of classList add a dark mode feature to the website. 
*/

let name = prompt("Enter your name")
document.write(`Welcome ${name}  , have a nice day !`);
// clock 
const ctime = document.getElementById('time');

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = `Time : ${time}`;


}
setInterval(clock,1000);

// dark mode

function darkMode(){
    const  el = document.body;
    el.classList.toggle('dark-mode');


}
clock();
darkMode();

