// function price(...num){ // rest operator to take multiple arguments as an array
//     return num
// }

// console.log(price(200,300,400));

//for objects
const user={
    name:"shivam",
    age:'19'
}

function userInfo(user){ // object can be passed as an argument
    console.log(`username is ${user.name}`);
    console.log(`age is ${user.age}`);//if we use another variable name by mistake then it will give undefined
}

userInfo(user);


//for arrays
let arr=[1,2,3,4,5]
function arrayInfo(array){ 
    return array[1]
}

console.log(arrayInfo(arr));


