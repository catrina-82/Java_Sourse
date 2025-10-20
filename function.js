// <<-------------|single Argument|------------>>

/* function table(value) {
  for (let index = 1; index <= 10; index++) {
    document.write(`${value} * ${index} = ${value * index}`);
    document.write(`</br>`);
  }
}

table(18);

// <<-------------|Multiple  Argument|------------>>

function multiplication(num1, num2) {
  document.write(`${num1} X ${num2} = ${num1 * num2}`);
}

multiplication(6, 7);

// <<-------------|The Argument object|------------>>

function addition() {
  if (arguments.length === 0) {
    console.log(`Please Enter any Perimeter !`);
  } else {
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
      sum = sum + arguments[index];
    }
    console.log(sum);
  }
}
let add = addition; // Store Function Using Variable
add(2, 3);
addition(1, 2, 4, 3, 5, 62); 

// <<-------------|Return Function|------------>>

function add(num1, num2) {
  return num1 + num2;
}

let sum = add(8, 9);

console.log(sum); 


// <<-------------|Global Variables V/S Local Variables|------------>>

let name = `akib`; // Global Variable , Access into function as well Outside of any Function 

function add(){
   
  let surname = `vijapura`; // Local Variables 
   
  console.log(surname); //only Access in function 
  
}


// <<-------------|Anonymous Function|------------>>

// Function Expression 

let greet = function (){

  console.log(`Good Morning`);

};

greet();

setTimeout(function (){
 console.log(`Hello !`);
 
} , 3000); 
*/

// <<-------------|Immediately Invoked Function|------------>>

(function () {

  console.log(`Hello World !`);
  
})();

let x = Math.floor(Math.random() * 10 +1) ;
console.log(x);
