class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends User {
    constructor(username,email,pass){
        super(username)
        this.email = email
        this.pass = pass
        
    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}
const barbie = new teacher("barbie","@gmail","12345667889")
barbie.addCourse()

const shinchan = new User("shin+can")
shinchan.logMe()

console.log(barbie===shinchan);
console.log(barbie instanceof teacher);


//Static properties

class UserN{
    constructor(usernames){
        this.usernames = usernames
    }

    loggin(){
        console.log(`usernames : ${this.usernames}`);
    }

    static createId(){  //restricts accessiblility
        return `123`
    }
}
const ananya = new UserN("ananya")
// console.log(ananya.createId())

class teaches extends UserN{
    constructor(usernames,emails){
        super(usernames)
        this.emails = emails
    }
}
const iphone = new teaches("iphone","@yahoo.co.in")
console.log(iphone.createId()); // kuch bhi access nahi karne de raha 'static'