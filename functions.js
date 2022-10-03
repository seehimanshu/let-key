function add(a,b)
{
    return a+b;
}
let ans=add(2,5);
console.log(ans);
// expression functions

function calculator(str,a,b) {
    if(str=='add')
    {
    return function add()
        {
            console.log(a+b);
        }
    }
    
}
let returnfunc=calculator('add',4,6);
console.log(returnfunc);
returnfunc();

let sayHi=function (){
    console.log("hi i am himanshu");
}
console.log("out put"+sayHi);
sayHi();
// iife-imediate invooke function expression
let heLlo=(function add(a,b){
    return a+b;
})(20,30);
console.log(heLlo);

let heLo=(function add(a,b){
    console.log(a+b);
})(20,30);

// let heLlo=(function add(a,b){
//     return a+b;
// });
// console.log(heLlo);
// console.log(heLlo(20,30));
