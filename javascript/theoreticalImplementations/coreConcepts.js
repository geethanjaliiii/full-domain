// // What Is a Prototype in JavaScript?
// // In JavaScript, prototype is a mechanism by which objects inherit properties and methods from other objects. It’s part of JavaScript's object-oriented model, which is based on prototypal inheritance (instead of class-based inheritance like in languages such as Java or C++).

const { response } = require("express")

// // Here’s a step-by-step explanation:

// // 1. Every Object in JavaScript Has a Prototype
// // When you create an object in JavaScript, it automatically has a hidden property called [[Prototype]], which points to another object (its prototype).
// // This prototype object acts as a blueprint and provides shared properties and methods to the object.


// Function.prototype.mybind=function(){
//     console.log("hasdfghj");
    
// }

// function fun1(){
    
// }
// function fun2(){

// }

// //each and every functions will get this method as we ttched a function to it
// fun2.mybind()
// fun1.mybind()

//simillerly we can create our own 

// function hello(name){
//     this.name=name
// }


// const lala=new hello('geetha')
// //adding a method to the prototype of Hello
// hello.prototype.greet=function(){
//     console.log(`hello ${this.name}`);
    
// }
// lala.greet()

function getUsers(userId){
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response)=>{
        if(!response.ok)
           { throw new Error("Failed to fetch")}
       return response.json()
    }
    )
    .then((data)=>console.log('users',data))
    .catch((error)=>console.log('jii',error))
}

getUsers('hi')