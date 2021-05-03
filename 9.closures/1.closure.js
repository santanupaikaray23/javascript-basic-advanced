function greet(message){
    return function(name){
        console.log(message+''+name)
    }
}
var sayHello = greet("Hello")
console.log(sayHello)
sayHello('santanu')