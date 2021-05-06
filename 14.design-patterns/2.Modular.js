//private method
var Module = (function(){
    var privateMethod= function(){

    }
    var publicMethod = function(){
        return "This is a public method"
    }
    return{
        santanu:publicMethod
    }
})();
console.log(Module)