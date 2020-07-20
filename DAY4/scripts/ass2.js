console.log("Assignment qts 2 ");
const student = {
    name : 'Helsinki',
    age : 24,
    projects : {
        dicegame : 'Two player dice game using java script'
    }
}

const {name , age , projects:{dicegame}} = student;
console.log(`Name = ${name} , Age =${age} , Projects = ${dicegame}`);