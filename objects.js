//Javascript objects are always in key value pair 
let obj={};//empty object
console.log(obj);

let person ={
    name:"abhishek",
    age:28,
    phone:9999999999,
    gender:"male",
    height:"170cm"
};

console.log(person);
console.log(person.height);
console.log(`hey ${person.name}, thankyou for sing in up`);

let str="hello";
console.log(str.length);//dot notation
console.log(str["length"]);//square bracket notation

//nesting of objects
let captainAmerica ={
    firstname:"steve",
    secondname:"rogers",
    friends:["bucky","tony stark","brue banner"],
    age:102,
    isAvenger:true,
    adress:{
        state:"manhattan",
        city:"newyork",
        country:"usa"
    },
    sayHi: function(){
        console.log(`hello my name is ${this.firstname}`);
    }
};

console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]);
captainAmerica.sayHi();//method accessing

// methods ->objects k andar functions 
console.log(str.toUpperCase());

for(let abc in captainAmerica){
    // console.log(abc);//for keys
    // console.log(captainAmerica[abc]);//for value of keys
    console.log(`${abc} : ${captainAmerica[abc]}`);//for in same line


}
delete captainAmerica.lastname;
console.log(captainAmerica.lastname);
