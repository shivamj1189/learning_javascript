const mySym=Symbol('key1');

let user={ //values can be overwritten
    name:'John',
    [mySym]:'myKey1',
    age:30,
    location:'New York',
    email:'6Df9q@example.com',
    isLoggedIn:false,
    lastLoginDays:['Monday','Saturday']
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user[mySym]);

// Object.freeze(user) //freeze method is used to freeze the object and prevent any changes to it



user.greeting=function(){
    console.log('Hello');
}

console.log(user.greeting);