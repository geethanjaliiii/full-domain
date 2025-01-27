function outerFunction(){
    let a=8;
    function innerFunction(){
        console.log(a);
        
    }
    return innerFunction
}

const z=outerFunction()//we called outer function
//the outer function will return inner function
z()
//here after returning innerfuction ,outerfuction will be garbage collected ,but still the inner function remebres variable in its lexical environments

//function+its lexical environment(scope of parents)==>closure

//application

//1.closures used in asynch programming, eg-setTimeout
// Data Encapsulation: Closures enable data hiding and abstraction.
// State Management: Retain variables between function calls.
// Callbacks and Event Listeners: Simplify asynchronous code.



//just like oop concepts, the private variables cant be accessed from outside,
//but it can be modified by the function it returns


//adv
// Closures provide a way to encapsulate private data and create public methods to interact with it.
// Closures help retain references to variables that would otherwise be lost after the execution of the outer function.