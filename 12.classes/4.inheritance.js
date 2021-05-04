function person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;

}
person.prototype.getfullName=function(){
    return this.firstName+ ' ' +this.lastName;
}
// var person=new person('John','galt')
// console.log(person.getfullName())
//child class

function Student(age){
    this.age=age;
    this.section="B"
}


//Inheretance using prototype:
Student.prototype=new person('santanu','kumar');
Student.prototype.getAge=function(){
    return this.age;
}
Student.prototype.grade="A+" 

//Multiple Inheritance

function Teacher(){
    this.course="English"
    this.age="50"
    
}

Teacher.prototype = new Student(null)

var student = new Student(37);
console.log(student.firstName)
console.log(student.lastName)
console.log(student.age)
console.log(student.getfullName())
console.log(student.getAge())

var teacher = new Teacher(45);
console.log(teacher.firstName)
console.log(teacher.lastName)
console.log(teacher.course)
console.log(teacher.age)