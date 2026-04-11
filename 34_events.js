// // document.getElementById('owl').onclick = function(){
// //     alert("owl clicked");
// // }

// document.getElementById('owl').addEventListener('mouseover', function(e){
//     console.log(e);
// })
// //eventListners object
// //types,timestamp,defaultPrevented
// //target,toElement,srcElement,currentTarget
// //clientX,clientY,offsetX,offsetY,screenX,screenY
// //altkey,ctrlKey,shiftKey,Keycode


// // if we use false--->bubbling phase
// // if we use true--->capturing phase
// document.getElementById('images').addEventListener('click', function(){
//     console.log("clicked inside ul");
//     e.stopPropagation();
// }, false)
// //if we odnt write false is selected by its own 
// document.getElementById('owl').addEventListener('click', function(){
//     console.log("clicked on owl");
//     e.stopPropagation(); //it will stop the event from bubbling up to the parent elements
// }, false)


// document.getElementById('GOOGLE').addEventListener('click', function(e){
//     e.preventDefault(); //it will prevent the default action of the event
//     console.log("clicked on google");
// })

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.parentNode);
    let rm=e.target.parentNode;
    rm.remove();
    //or removeIt.parentNode.removeChild(removeIt);
})
   

