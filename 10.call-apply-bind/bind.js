var person1={firstName:'santanu',lastName:'paikaray'}
var person2={firstName:'sidhanta',lastName:'paikaray'}
var person3={firstName:'sipun',lastName:'paikaray'}
var person4={firstName:'sandeep',lastName:'paikaray'}

function getName(message,city){
    return message + ' from ' + city + ' to ' + this.firstName +' '+ this.lastName
}
var bindMessage = getName.bind(person1)
console.log(bindMessage('Hello','Telangapada'))

var bindMessage = getName.bind(person2)
console.log(bindMessage('Hello','Telangapada'))

var callMessage = getName.call(person3,'Hello','Boston')
console.log(callMessage)

var applyMessage=getName.apply(person4,['Hello','Boston'])
console.log(applyMessage)
 function sample(){
    var a=10
    this.a=2
    
}
sample()
 var a=5;
 console.log(a)
 var obj = new sample();
 console.log(obj.a)
 console.log(this.a)
