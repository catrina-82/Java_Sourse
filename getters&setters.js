
// <<-------------|Getter function|------------>>
let person = {
    name : `AKib`,
    age : 17,

    //This is simple code using method object
    upName : function(){
        return this.name.toUpperCase();
    },

    // This code is using Getter Function to get value

    get upName(){
        return this.name.toUpperCase();
    },
};

// console.log(person.upName()); // for using method
console.log(person.upName); // for getter function where don't use Brackets


// <<-------------|Setter function|------------>>

let person2 ={
    name : `akib`,
    age : 17,

    set setName(n){
        this.name = n.toUpperCase();
    },
};

person2.setName = `vijapura`;

console.log(person2);
