function add(a,b)
{
    return a+b;
}
let ans=add(2,5);
console.log(ans);

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
