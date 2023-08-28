// fuction  declaration 
//  function greet(){
//     console.log("hello there")
//  } 
// greet();

//function expression  
// const speak =function(name, time){
//     return (`good ${time} ${name}`);
// };
//  const expression =speak("mario", "afternoon");
//  console.log(expression);

// arrow function
// const calcArea = (a ,b) =>  a+ b;

// const add= calcArea(3,7)
// console.log(add);

// const bill =(products, tax) =>{
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;

//     } 
//     return total;
// }
// console.log(bill([10,15,30], 0.2));

// callback function

// function myFunc(callback) {
//     let value = 50;
//     callback(value)
    
// }
// myFunc((value) => console.log(value))

// let people =['mario', 'luigi' ,'ryu', 'shaun', 'bowser']

// // const logPerson = (person, index)=>{
// //     console.log(`${index} -hello ${person}`);
// // } 

// // people.forEach(logPerson)

// const ul = document.querySelector("ul");

// const people =['mario', 'luigi', 'toad', 'bowser', 'princess']

// let html =``;

// people.forEach((person) =>  html += `<li style="color: purple">${person}</li>`)

// ul.innerHTML = html;


