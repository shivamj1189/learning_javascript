// const user={
//     name:"shivam",
//     age:'19',
//     welcomeMessage:function(){
//         console.log(`welcome ${this.name}`);
//     }
// }

// user.welcomeMessage();
// user.name='shiv'
// user.welcomeMessage();

// console.log(this); // this keyword refers to the global object in the browser and undefined in strict mode 
// //in browser 'this' will refer to the window object and in node this will refer to the global object


// function sayHello(){
//     console.log(this);
// }

// sayHello(); // in this case 'this' will refer to the global object because the function is called in the global scope


// const users= () => {
//     let name='shivam'
//     console.log(this);
// }

// users();


// arrow functions 

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }//if we use curly braces then we have to use return statement

// //or
// const addtwo=(num1,num2)=> num1+num2

// //or 
// const addtwo=(num1,num2)=> (num1+num2)
