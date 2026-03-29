let name="hitesh" // or let name=new String("hitesh") 
// both are same but first one is primitive and second one is non-primitive data type
let number=42

// console.log(name + " is " + number + " years old"+"." )

// //or 
// console.log(`${name} is ${number} years old.`)

// console.log(name[0])

// console.log(name.indexOf("i"))
// console.log(name.charAt(2))

// console.log(name.__proto__)

// let newString=name.substring(0,2) 
// console.log(newString)

// let newString2=name.slice(-4,6)
// console.log(newString2)


// let newString3="   hello world   "
// console.log(newString3);

// console.log(newString3.trim())

let url="https://www.youtube.com/watch?v=abc123"

console.log(url.replace("youtube","vimeo"))
console.log(url.includes('hitesh'))


let strings="hello-world-once-again"
let arr=strings.split("-")
console.log(arr)