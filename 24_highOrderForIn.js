// let myObj={
//     js:'javascript',
//     cpp:'c++',
//     java:'java',
//     python:'python'
// }
// //for in loop for objects
// for(const key in myObj){
//     console.log(`${key}:- ${myObj[key]}`);
// } 

// //using for in loop for arrays
// let myArr=['javascript','c++','java','python']
// for(const key in myArr){
//     console.log(`${key}:- ${myArr[key]}`);
// }

//using for in loop for maps
let myMap=new Map()
myMap.set('name','shivam')
myMap.set('age',19)
myMap.set('city','delhi')
myMap.set('name','shivam')

for(const key in myMap){
    console.log(key);
}


//this means that for of loop is used for arrays,maps and for in loop can be used for arrays and objects. 