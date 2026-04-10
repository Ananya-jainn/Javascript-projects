//question
let myName = "ananya        "
let myName3 = "seename       "
//console.log(myName.trim().length);  // hume saari string ke saath truelength chahiye jo ye nhi deta

//solution
let userName = "ananya     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
}
userName.trueLength()
"classmate".trueLength()
"aloo tikki".trueLength()
//--------------------------------------------------//



let myArr = ["barbie","sofia"]
let barbiepow = {
    barbie :"fairy",
    sofia: "princess",

    getSofiaPow : ()=>{
       // console.log(`sofia power is ${this.sofia}`);
    }
}

Object.prototype.ananya = function(){
    //console.log("ananya is present in all objects");
}

Array.prototype.heyananya = function(){
    //console.log("hello to everyone")
}
//barbiepow.ananya()

myArr.ananya()
myArr.heyananya()
//barbiepow.heyananya() // this wil give error iske pass excess nahi hai
// array ----->> object ------>> NULL (not visa versa)


//inheritance

const user = {
    name:"ananya",
    workplace:"google"
}

const teacher = {
    makevideo : true
}
const teachingsupp = {
    isAvailable : false
}
const TAsupp = {
   makeAssignment : 'JS Assignment',
   fullTime : true,
   __proto__ : teachingsupp
}

teacher.__proto__ = user


//modern syntax

Object.setPrototypeOf(teachingsupp,teacher)
