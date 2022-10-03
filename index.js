// var a;
// a=10;
// console.log(a);
// console.log(typeof a);

// a="hello";
// console.log(a);
// console.log(typeof a);

// a=true;
// console.log(a);
// console.log(typeof a);

// a=null;
// console.log(a);
// console.log(typeof a);

// var num=10;
// console.log(num);
// var float=2.4;
// console.log(float);

// var str='a';
// console.log(str);
// console.log(typeof str);
// str="how you doing"
// console.log(str);

// var b="hello g kidda";
// console.log(b);
// var b="hello g\nkidda";
// console.log(b);

// b=`kya kr re
// ho g`
// console.log(b);

// var num=540;
// console.log(`half of ${num} is ${num/2}`);

// let g=100;
// console.log(g);

// // let g=200; not possible
// g="hello"
// console.log(g); 

// var num=10;
// for(var i=0;i<num;i++)
// {
//     if(i%2==0)
//     {
//         console.log("num is even");
//     }
// }

// const l=2;
// // const a=7; cannot be done
// // a=10; cannot be done

// console.log(l);
// let j=20;
// var num=20;
// for(var i=0;i<num;i++){
//     let j=200;
//     if(i%2==0)
//     {
//         console.log(i);
//     }
  
//     console.log("inner" +j);
// }
// console.log(j);
// function add(a,b)
// {
//     return a+b;
// }
// let ans=add(2,5);
// console.log(ans);

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