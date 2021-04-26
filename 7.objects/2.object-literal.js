//Object Literal

// var person={};
// console.log(person)

var person={
    Id:1,
    firstname:'santanu',
    lastname:'paikaray',
    count:100,
    isadmin:true,
    address:{street:"1st Main",
city:"Bhubaneswar",
state:"Odisha"
},
    Array:["red","blue","yellow"],
    getDetails:function(){
        return this.isadmin;

    }
}

console.log(person)
console.log(person.getDetails())
console.log(person.address)