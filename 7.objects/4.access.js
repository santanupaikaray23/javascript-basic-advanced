var preventObject = {
    name:'santanu',
    city:'Puri',
    age:24
}
Object.preventExtensions(preventObject);

preventObject.email="santanupaikaray1996@gmail.com"
preventObject.name="lucky"

 preventObject.city="khurda"
console.log(preventObject);

var sealObject = {
    name:'Santanu',
    city:'Puru',
    age:40
}
Object.seal(sealObject);
sealObject.email="Sidhantapaikaray1997@gmail.com"
sealObject.name="Lucky"
delete sealObject.age;
console.log(sealObject);

var freezeObject ={
    name:"santanu",
    city:"Puri",
    age:25,
    address:{
        state:'Odisha'
    }
}
Object.freeze(freezeObject);
freezeObject.email="santanupaikaray1996@gmail.com"
freezeObject.name="sidhanta"
delete freezeObject.age;
freezeObject.State='Odisha'
console.log(freezeObject);


