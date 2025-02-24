function a(p)
{
    var x=10;
    function b()
    {
        console.log(x,p);
    }

    b();
}
//a(20);

function a(p)
{
    function b()
    {
        console.log(x,p);
    }
    var x=10;
    b();
}
//a(20);

function c()
{
    var x=10;
    return function(p)
    {
        console.log(x,p);
    }
}
// c(20)(30);
// var d=c();
// d(20); Same as above the line 21

function e()
{
    function f()
    {
        console.log(x);
    }
    var x=10;
    f();
    //var x=10; its showing undefined because of hoisting 
}
//e();

// function counter() {
//     let count=0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// let counter1=counter();
// let btn=document.getElementById("btn");
// btn.addEventListener("click",counter1);

// function counter() {
//     let count=0;
//     function increment(){
//         count++;
//         console.log(count);
//     }
//     increment();
// }
// let counter1=counter();
// let btn=document.getElementById("btn");
// btn.addEventListener("click",counter1);
//Its only gonna print 1 and btn not gonna work because as this function
//is not returning anything(it return undefined and we can't add event listener to undefined)
//its printing only 1 because increment is called only once

function counter(){//constructor function

    let count=0;

    this.increment=()=>{
        count++;
        console.log(count);
    }

    this.decrement=()=>{
        count--;
        console.log(count);
    }
}

let counter1=new counter();
let btn=document.getElementById("btn");
btn.addEventListener("click",counter1.increment);
let btn1=document.getElementById("btn1");
btn1.addEventListener("click",counter1.decrement);

function makerAdder(n)
{
    return function(x)
    {
        console.log(x+n); 
    }
}
// let add3=makerAdder(3);
// add3(5);

function clocker()
{
    for(let i=1;i<=5;i++)//let is block scoped, var is function scoped
    {
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}
// clocker();
//if we use var instead of let then it will print 6 5 times because var is function scoped
