const course={
    title:"JavaScript",
    instructor:"John Doe",
    price:999
}

const {instructor : i}=course

console.log(i);

//type of data that we got as json from api
// {
//     "name":"John",
//     "course" :"JavaScript",
// }
const navBar = ({company}) =>{ // function that takes an object as an argument and destructures it to get the company property
//function destructuring
}
navBar(company='Google')