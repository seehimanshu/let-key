// string is a sequence of characters

var str="hello pepcoders";
console.log(str);

console.log(str[3]);
console.log(str.length);

//string methods

//1. extraction Method

//slice method
//jo index likha hoga waha se shuru hoga or last wale se phle tk

var slicedStr=str.slice(6,15);
console.log(slicedStr);
console.log(str);

var slicedStr=str.slice(6,-3);
console.log(slicedStr);

var slicedStr=str.slice(4);
console.log(slicedStr);