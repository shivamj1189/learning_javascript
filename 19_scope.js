// if(true){
//     let a=10
//     const b=20
//     var c=30
// }

// //console.log(a);
// //console.log(b);
// console.log(c);

// // here a and b are not accessible outside the block because they are declared using let and const which are block scoped, whereas c is accessible outside the block because it is declared using var which is function scoped.

// //nested scope

function one(){
    const username='shivam'

    function two(){
        const website='youtube'
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()



//other ways for function declaration 
// addone(10); this will give in error
const addone=function(num){
    return num+1
}


//type 2
console.log(addtwo(10)); //this will not give an error

function addtwo(num){
    return num+2
}

//type 3

const addthree=(num)=>{
    return num+3
}
console.log(addthree(10)); 