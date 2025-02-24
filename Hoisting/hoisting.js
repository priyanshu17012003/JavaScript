//console.log(a); ReferenceError: Because a is not defined

var b;
console.log(b);//undefined

console.log(c);//undefined
var c=10;

let d;
console.log(d);//undefined

//console.log(e); ReferenceError: Cannot access 'e' before initialization
let e=20;

// console.log(f); ReferenceError: Cannot access 'f' before initialization
// const f=30;

// function f(g)
// {
//     console.log(g);
// }
// f(); Print undefined

// function g(h)
// {
//     console.log(h);
// }
// g();
// let h=10; Print undefined

//Block Scope
var l=100;
{
    var i=10;//i shadowing l
    let j=20;//m shadowing l
    const k=30;//n shadowing l
    
    console.log(i,j,k);
}
console.log(i);//10
// console.log(j); ReferenceError: j is not defined
// console.log(k); ReferenceError: k is not defined

let m=200;
const n=300;
console.log(m,n);


