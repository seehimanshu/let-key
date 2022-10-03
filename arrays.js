let cars=['BMW',"AUDI","G-WAGON",1,2,3,true];
// int js you can store different values of different types of arrays
console.log(cars);

//accesing the elements of arrays
console.log(cars[0]); 
console.log(cars[3]);
console.log(cars[4]);
// console.log(cars[6]);

//replacing elements in array

cars[3]="TATA";
console.log(cars[3]);

//adding elements in an array

cars[7]="MARUTI"
console.log(cars);

// methods of an array
// pop method ->this method removes element from the last
cars.pop();
console.log("after poping\n"+cars);

//2 push method -> it pushes the element at the end of an array
cars.push("MAHINDRA");
console.log(cars);

//3 unshift method -> it add the element at the starting an array
cars.unshift("JLR");
// cars.unshift("mustang");
cars.unshift("MACK")
console.log(cars);
//4 shift method ->it removes element from the 0th index od an array

cars.shift();
cars.shift();
console.log(cars);

console.log(cars.length);

//2d array

let array2d=[
    [1,3,2],[4,5,6],[7,8,9]
];
console.log(array2d);
console.table(array2d);
console.log(array2d[2][2]);
