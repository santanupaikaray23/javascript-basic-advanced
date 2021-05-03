// console.log(this)//this points to global object
// function a(){
//     console.log(this)//this keyword is still going to point the global object
// }
// a()
// // var b=function(){
// //     console.log(this)//This still point to global object
// // }
// // b()

// function sample(){
//     console.log(this)
//     this.newVariable='santanu'
// }
//  sample()
// console.log(newVariable)
var person={
    name:'santanu',
    log: function(){
        console.log(this)
    }
}
person.log();