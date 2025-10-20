
function Student(first , last , age , cls,nationality){
   this.firstName = first;
   this.lastName = last;
   this.age = age;
   this.class = cls
   this.nationality = nationality;
}

var student1 = new Student("Akib" , "Vijapura" , 17 , 12 , "indian");
var student2 = new Student("Aman" , "Arodiya" , 19 , 12 , "indian")

Student.prototype.sem = "sem 5";

Student.prototype.fullName = function(){
    return  this.firstName + " " + this.lastName;
}

console.log(student1.fullName()); 
console.log(student2);




