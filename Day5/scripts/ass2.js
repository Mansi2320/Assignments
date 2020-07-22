console.log("Assignment qts 2");
 class User{
     constructor(name , age , email){
         this.name = name;
         this.age = age;
         this.email = email;
         this.courses = [];

     }

     login(){
         console.log(`The User ${this.name} has logged in`);
         return this;
     }

     logout(){
        console.log(`The User ${this.name} has logged out`);
        return this;

    }


 }
 class Moderator extends User{
     constructor(name , age , email , role ){
         super(name , age , email);
         this.role = 'Moderator';
         this.coins = 0;

        

     }

     addCoins(){
         this.coins ++;
         console.log(`The user  ${this.name} has ${this.coins} coins`);
         return this;

     }
     delCoins(user , coins){
         user.coins -= coins;
         console.log(`The user  ${this.name}has ${this.coins} coins`);
         return this;



     }

 }
 class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
        return this;

    }
 
    deleteCourse(user , course){
        user.courses = user.courses.filter(courses=>courses !== course);
        console.log(user);
        return this;
    

    }
}
let user1 = new User('Dilip',25,'dilip@gmail.com')
let user2 = new User('Krishnan',24,'k@gmai.com')
let mod = new Moderator('Berlin',24,'b@gmail.com','Moderator');
let admin = new Admin('Rio',25,'r@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

// Admin output...
admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
admin.deleteCourse(user1 , 'Javascript');

// Moderator part..
mod.addCoins(user2 , 1);
mod.addCoins(user2 , 8);
mod.addCoins(user1, 3);
mod.addCoins(user1 ,4);

// 



