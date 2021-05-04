function Student(){
    this.name='santanu'
    this.gender='M'
}
var stuObj = new Student();
console.log(Student.prototype)

console.log(stuObj.prototype)
console.log(stuObj.__proto__)