var Singleton=(function(){
    var instance=null;

    var createInstance = function(){
        var obj=Object.create(null)
        console.log('Object is created')
        return obj;
    }

    return{
        getInstance: function(){
            if(instance){
                instance = createInstance();

            }
            return instance;
        }
    }

})();

var singleton1=Singleton.getInstance();
console.log(Singleton1);

var singleton2=Singleton.getInstance();
console.log(singleton2)