let arr=[0,1,2,3,4,5]

// arr.push(6)
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.unshift(9)
// console.log(arr);

// arr.shift()
// console.log(arr);

// console.log(arr.includes(3));

// console.log(arr.indexOf(3));

// let newArr=arr.join()
// console.log(newArr);//becomes of string type 
// console.log(arr)


//using slice and splice

let sliceArray=arr.slice(2,5)
console.log(sliceArray);
console.log(arr);

let spliceArray=arr.splice(2,4) //splice will change the original array and return the removed elements
console.log(spliceArray);
console.log(arr);