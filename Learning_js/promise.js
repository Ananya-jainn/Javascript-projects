const promiseOne= new Promise(function(resolve,reject){
    //Do and async task
    //db calls, cryptography , network
    setTimeout(function(){
        console.log(`async task is complete`);
        resolve()
    },1000)
})

promiseOne.then(()=>{
    console.log("promise consumed");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`async task 2`);
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"anu",email:"aaaaa@gmail.com"})
    },1000)
})
promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"anu",password:"12345"})
        }else{
            reject('ERROR!!!!')
        }
    },1000)
})

promise4
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{     //chaining
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{console.log("the promise is either resolved or rejected")})


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript",password:"12345"})
        }else{
            reject('ERROR in JS!!!!')
        }
    },1000)

});
async function consumepromiseFive(){
  try{
    const response =  await promiseFive
    console.log(response);
  }catch(error){
        console.log(error);
  }
    
}

consumepromiseFive()