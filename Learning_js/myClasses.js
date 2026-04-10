//ES6

// class User{
//     constructor(username,email , Password){
//         this.username = username;
//         this.email = email;
//         this.Password = Password
//     }

//     ecryptPass(){
//         return `${this.Password}abc`
//     }
//     changeserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }   
// const chai = new User("chai","@gmail.com","234456788");
// console.log(chai.ecryptPass());
// console.log(chai.changeserName());


/// BTS
function User(username,email , Password){
     this.username = username;
        this.email = email;
        this.Password = Password
}

User.prototype.ecryptPass = function(){
     return `${this.Password}abc`
}

User.prototype.changeserName  = function(){
        return `${this.username.toUpperCase()}`
    }
const TEA = new User("YEA","@gmail.com","234456788");
console.log(TEA.ecryptPass());
console.log(TEA.changeserName());