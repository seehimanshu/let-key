console.log(x);

var x=10;
let d=100;
console.log(d);
var a=300;
{
    var a=10;
    let b=20;
    const c=30;

    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
// console.log(b);

var a=10;
var a=100;//shadowing
console.log(a);

let c=10;
var a=2000;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(" inner"+a);
    console.log(b);
    console.log(c);
}
console.log(c);
console.log(a);