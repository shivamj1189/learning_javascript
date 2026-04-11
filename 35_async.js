const hello=function() {
    console.log("Hello after 2 second");
};
const changeText=function() {
    document.querySelector('h1').innerText="async js is fun";
}

// setTimeout(hello, 2000);//it will execute the function after 2 seconds(only one time)

const change=setTimeout(changeText, 2000);

// setInterval(function() {
//     console.log("Hello every 2 seconds");
// }, 2000);//it will execute the function every 2 seconds(until we stop it)

document.querySelector('#stop').addEventListener('click', function() {
    clearTimeout(change); //it will stop the timeout function from executing
    console.log("STOPPED");
})