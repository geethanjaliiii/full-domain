//call back is a function passed into another function as an argument which is invoked inside outer function

// function greet(name,callback){
//     console.log(`hi ${name}`);
//     callback()
//     console.log("hii");
    
// }

// function sayGoodBye(){
//     console.log('good bye');
    
// }

// greet('anju',sayGoodBye)

//asynchrous call back
function delayedgreet(name,callback){
    console.log(`hi ${name}`);
    setTimeout(callback,2000)
    console.log("hii");
    
}
function sayGoodBye(){
    console.log('good bye');
    
}

delayedgreet('felba',sayGoodBye)