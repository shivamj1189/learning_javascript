
let newArr=[1,2,3,4,5,6,7,8,9,10]

// let myNewArr=newArr.filter((num)=>num>4)
// console.log(myNewArr);

//or

// let myNewArr=newArr.filter((num)=>{
//     return num>4;
// })
// console.log(myNewArr);

let nums=[]

newArr.forEach((num)=>{
    if(num>4){
    nums.push(num)
}
})
console.log(nums); 