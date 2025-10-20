// Formula for Generate random number
let x = Math.floor(Math.random() * 6 + 1);

//Formula for Generate random number Between two number
function randomNum(min , max){
    x = Math.floor(Math.random() * (max - min + 1)) + min ;
    return x ;
}

console.log(randomNum(10 , 20));
 