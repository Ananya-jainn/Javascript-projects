const user = {    //these are object literals
    username:'ananya',
    logincount:6,
    signedIm: true,


    getUserDetails : function(){
        //console.log(`user name ${this.username}`);
        //console.log("got user deatails from database");
        console.log(this);
    }
        

};


//console.log(user.getUserDetails());
//console.log(user.username);

//const promise1 = new Promise()  // 'new' is constructor function used for making new context
//const date = new Date()


function User(username,logincount,isLoggedIn){
    this.username = username  // LHS is variable and RHS is the passing value/arguement
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`welcome${this.username}`);
    }
    return this;//this is implicitaly defined
}

const userOne = new User("ananya",10 , true);
const userTWO= new User("MEE",10 , false);
console.log(userOne.constructor);   //[Function: User]
console.log(userTWO);
// empty create is created called instance when used 'new'
// 1.object created
// 2.construction function is called cause of 'new'
// 3.arguements vagera gets inject in 'this'
// 4.we get it in function