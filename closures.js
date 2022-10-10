// function outer() {
//     var a=10;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer();
function outer() {
    var a=10;
    function inner(){
        console.log(a);
    }
    return inner;
}
var z=outer();
console.log(z);
z();

function outter(){
    var a=7;
    function inner(){
        console.log(a);
    }
    a=11;
    return inner;
}
var c=outter();
console.log(c);
c();