// <<-------------|push , pop and , slice of an Array|------------>>

// const book = new Array("Math" , "English" , "hindi" , "Gujrati");
// book.push("akib");
// book.unshift("akib");
// book.pop();
// book.shift();
// book.slice(1,1);
// let position = book.indexOf(`English`);
// console.log(Array.isArray(book));


// <<-------------|split and join of an Array|------------>>

// let text = `This is random text here.`;
// let wordText = text.split(' ');
// let wordText = text.join(`-`);
// console.log(wordText);


// <<-------------|Concat of an Array|------------>>

// const  name1 = new Array(`Akib` , `Aman`);
// const name2 = new Array(`Raza` , `Muzzamil`);
// let friends = name1.concat(name2);
// console.log(friends);


// <<-------------|Multidimensional Array|------------>>

// let bookWithPages = [
//   [`Maths`, [`300` , `400`]], array in array
//   [`English`, `100`],
//   [`Science`, `400`],
//   [`Hindi`, `150`],
// ];
// let fetch = bookWithPages[1][0];
// let fetch = bookWithPages[1];
// let fetch = bookWithPages[1][1];
// let fetch = bookWithPages[0][1][1];
// console.log(fetch);


// <<-------------|Array with loops|------------>>

// const book = new Array("Math" , "English" , "hindi" , "Gujrati");

// for (let index = 0; index < book.length; index++) {
//     console.log(`Elements ${index} is ${book[index]} \n`);
    
// }


// <<-------------|Array with foreach|------------>>

// const book = new Array("Math" , "English" , "hindi" , "Gujrati");
 
// book.forEach(myFun => {
//     console.log(myFun);
    
// });