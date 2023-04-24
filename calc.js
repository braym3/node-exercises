function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function divide(a,b){
    return a / b;
}

function multiply(a,b){
    return a * b;
}

// making the methods public & available to other files
// encapsulation - kinda like a java class - can only access these by importing this file
module.exports = {
    add,
    subtract,
    divide,
    multiply
}