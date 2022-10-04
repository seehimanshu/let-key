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
//substring method

// // jo index de rkha h waha se start hoga or jo 2nd number de rkha h utne total no of character add krega

// let ans=substr(2,6);
// console.log(ans);
// console.log(str);

str="YOLO";
console.log(str);
console.log(str.toLowerCase());

str ="fomo"
console.log(str);
console.log(str.toUpperCase());

//concatenation methhod ->2 ko jodta h

let firstStr="you guys ";
let secondStr="are smart ";

let concatenationStr=firstStr+secondStr;
console.log(concatenationStr);

// concat method ->end mai jodta h
let concatStr=firstStr.concat(secondStr,"and me");
console.log(concatStr);

//trim method ->remove all the white spaces
let trimStr=        "      hello   how are you      ";
console.log(trimStr);
console.log(trimStr.length);


console.log(trimStr.trim());
console.log(trimStr.trim().length);
