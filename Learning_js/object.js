function mul(num){
    return num*5
}

mul.power = 2  // function function bhi hai aur object bhi hai
console.log(mul(5));
console.log(mul.power);
console.log(mul.prototype);

function createuser(username,score){
    this.username = username
    this.score = score
}

createuser.prototype.increment = function(){
   this.score++  //this matlab jiss
}
createuser.prototype.printMe = function(){
    console.log(`score os ${this.score}`);
}
const mee = new createuser("mee",100)
const us =  new createuser("us",109)