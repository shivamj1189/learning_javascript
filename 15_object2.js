let tinderUser={}

tinderUser.id='1234567890'
tinderUser.name='John'
tinderUser.isLoggedIn=false

// console.log(tinderUser);

let regularUser={
    email:'6Df9q@example.com',
    fullName:{
        userFullName:{
            firstName:'John',
            lastName:'pall'
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);


// const obj1={1:'a',2:'b'}
// const obj2={3:'c',4:'d'}
// const obj3={5:'e',6:'f'}

// //const obj3={obj1,obj2}
// //const obj4=Object.assign(obj1,obj2,obj3)  we don't use thi because it will move all merged value to obj1 
// const obj4=Object.assign({},obj1,obj2,obj3)
//const obj4={...obj1,...obj2,...obj3} //spread operator
// console.log(obj4);
// console.log(obj1);




const users=[
    {
        name:'John',
        id:'123'
    },
    {
        name:'pall',
        id:'456'
    }
]

// console.log(users[0].name);

//mostly used when working with databases
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
