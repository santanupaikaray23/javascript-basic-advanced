var person1 = {firstName:'Santanu',lastName:'Paikaray'}
var person2={firstName:'Sidhanta',lastName:'Paikaray'}
var person3={firstName:'Sandeep',lastName:'Paikaray'}
var person4={firstName:'Sipun',lastName:'Paikaray'}

function getName(message,city){
    return message + 'from' +city+ +'to'+this.firstName+ '' +this.lastName
}
var bindMessage = getName.bind(person1)
console.log(bindMessage('Hello','Boston'))