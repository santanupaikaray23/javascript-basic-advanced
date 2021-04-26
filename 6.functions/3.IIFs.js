var sample=(function(){
     console.log('This is a sample function')
    return 1;
})()
console.log(sample)

var output=(function (){
    var name="Uma";
    var getName=function(){
        return name;
    }
    return getName()
})()
console.log(output)