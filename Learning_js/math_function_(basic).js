const chai = {  // object
    name:"Green Tea",
    price :'1000',  /// property
    isAvailable : true,

    orderChai : function(){
        console.log("green tea nahi bani (code fat gaya)");
    }

}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
console.log(Object.getOwnPropertyDescriptor(Math.PI));


Object.defineProperty(chai , 'price', {
   // writable : false , 
    enumerable : false,
})

// console.log(Object.getOwnPropertyDescriptor(chai,"price"));

for(let [key,value] of Object.entries(chai) ){
    if(typeof value !== 'function'){
        console.log(`${key}->${value}`);
    }
    
};

console.log(Math.floor(Math.PI)); // NOT POSSIBLE

