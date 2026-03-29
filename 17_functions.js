// function say(){
//     console.log("Hello World");
// }
// say //this is just a reference to the function
// say() //function invocation


// function add(a,b){
//    console.log(a+b)
// }

// add(2,"3") //this will concatenate the two values because of type coercion
// add(2,3) //this will add the two  



function loginUserMessage(username){
  if(username===undefined){
    return "Please enter a username"
  }
  return `${username} just logged in`
} 

console.log(loginUserMessage('Shivam'));
console.log(loginUserMessage());

//important term in functions
console.log(console.log("Hello World"));//this will return undefined because console.log() does not return anything
