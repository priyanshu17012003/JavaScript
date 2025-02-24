let grandparent = document.getElementById("grandparent");
let parent = document.getElementById("parent");
let child = document.getElementById("child");

// grandparent.addEventListener("click",function(){
//     console.log("Grandparent clicked");
// });

// parent.addEventListener("click",function(){
//     console.log("Parent clicked");
// });

// child.addEventListener("click",function(){
//     console.log("Child clicked");
// });
// by default Third parameter is false and it is bubbling.


// grandparent.addEventListener("click",function(){
//        console.log("Grandparent clicked");
//     },true);

//     parent.addEventListener("click",function(){
//         console.log("Parent clicked");
//     },true);

//     child.addEventListener("click",function(){
//         console.log("Child clicked");
//     },true);
// if third parameter is true then it is capturing


// grandparent.addEventListener("click",function(){
//        console.log("Grandparent clicked");
//     },true);

//     parent.addEventListener("click",function(){
//         console.log("Parent clicked");
//     });

//     child.addEventListener("click",function(){
//         console.log("Child clicked");
//     },true);
// Capturing event goes first then Bubbling event goes.
