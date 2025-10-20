// "use strict" // for only when Variables Declaration is Compulsory 
// <<-------------|Object Declaration |------------>>
/*
let person = {};

console.log(person);

// <<-------------|Object With Properties |------------>>

let person = {
  firstName: `akib` ,//Object Property 
  lastName: `Vijapura` //*Object Property 
};

person.age = `17`; // To Add New Property In Object

person.firstName = `Akib`; // To Modifie Object

delete person.lastName; // To Delete Property In Object

console.log(`height` in person); // To ckeck Property Existing Objects or Not


// Methods For Access Object
console.log(person.firstName);
//          or
console.log(person[`lastName`]);

console.log(person); //To See full object


// <<-------------|Entreating over Property Of an Objec using for in loop|------------>>
let students  = {
    studentName : `Akib`,
    studentRollNo : `142`,
    Age : `17`,
    Department : `Informatin Technology `
};
for (const key in students) {
    console.log(key + ` : ` + students[key]);
    
}


// <<-------------|Object With Methods |------------>>
// Object + Function = Method 

let greeting = {
//    sayHello : function (){
//        console.log(`Hello !`);  
//    },

      sayHello (){
          console.log(`Hello !`);
      }
};
// ---->first Method<-------
// greeting.sayHello = function (){
//     console.log(`Hello !`);
    
// }; 

// ---->Second Method<-------
//  function greet( ) {
//      console.log(`Hello !`);
//  }
//  greeting.sayHello = greet;

// ---->Third Method<-------
// third method is in line number 48 To 50


// ---->Forth Method (Introduced in ES6)<-------
// Forth method is in line number 52 To 54

 
greeting.sayHello();



// <<-------------|This Object|------------>>
// this object is use to Access property in the same object 
let person = {
    firstName : `Akib`,
    lastName : `Vijapura`,
    greet (){
        console.log(`Hello , My name Is ` + this.firstName+` And i have ` +car.brand+ ` car`);
        
    }
};

let car = {
    brand : `TATA`,
    model : `safati`
};
person.greet(); 

// <<-------------|Math Object|------------>>

let x = Math.PI; // for PI
x = Math.round(4.5); // for round Up a Number 
x = Math.ceil(7.6);  // for Ceiling a number
x = Math.floor(3.4); // for Flooring a number
x = Math.trunc(6.7); // for remove point 
x = Math.pow( 5 , 2); // for Count power of any number , where First argument is base and secound in power
x = Math.sqrt(25) ; // for find Square Root of any Number
x = Math.min(12,34,56,-4,212); //for find Minimum Number from given numbers
x = Math.max(12,34,56,-4,212); //for find Maximum  Number from given numbers
console.log(x);

// <<-------------|Date Object|------------>>
const date = new Date( 2003 , 11 , 9 , 8 , 30 , 23 ); 
// For Fetching Attributes usig Get Object 
console.log(date.getTime());// For Millisecond 
console.log(date.getFullYear()); // For Year 
console.log(date.getMonth()); // For Month
console.log(date.getDate()); // For Date
console.log(date.getHours()); // For Hours 
console.log(date.getMinutes()); //For Minutes 
console.log(date.getDay()); // For Day

// For Changes Attributes useing Set Object

date.setFullYear(2002); // For set new Year
date.setMonth(2);// For set new Month
date.setDate(7); // For set new Date
date.setHours(13); // For set new Hours
date.setMinutes(12); // For set new Minutes
date.setSeconds(21); // For set new Seconds
date.setMilliseconds(89); // For set new Millisecounds

function dateCal(key){
    date.setDate(date.getDate() + key );
}
dateCal(50);
console.log(date);


let date1 = new Date(2022 , 4, 12 , 22 , 23 , 45 , 99);
let date2 = new Date();

if (date2 > date1) {
    console.log(`date1 past date`);
    
}else if(date1 > date2){
console.log(`date 1 is future date`);

}
else{
    console.log(`same date`);
    
}
*/
// <<-------------|Nested Object |------------>>


 var usr = {
    id : 142,
    email : `xyz@gmail.com`,
    personalInfo :{
        name : `Akib`,
        address : {
            city:`xyz...`,
            state : `gujrat`,
            contry : `india`,
        }
    }
 }

console.log(usr.personalInfo.address);

 


