//stack(primitive) vs heap(non-primitive)

//stack is used to store primitive data types 
let str1="hello";
let str2=str1;
str2="world";//here copy of value comes

console.log(str1);
console.log(str2);

//heap is used to store non-primitive data types
let obj1={
    name:"hitesh",
    age:23,
}
let obj2=obj1;
obj2.name="rohit";//it directly changes the value of obj1 because both obj1 and obj2 are pointing to the same reference in heap memory

console.log(obj1);
console.log(obj2);