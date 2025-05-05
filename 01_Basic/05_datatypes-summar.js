// Primitive

// types 7 : String , Number , Boolean , Null, Undefined, Symbol , BigInt
// let id = Symbol('125')
// let anotherId = Symbol('125')
const id = Symbol('haris')
const anotherId = Symbol('kinza')
const value = 100
const myValue = 100.34
const outTemp = null
const bigNumber = 356789905056n


// console.log(id);

// console.log(anotherId);

// console.log(id===anotherId);

// Refference type datatype

// Arrays, Objects, Functions

// arrays are written in sqaure brackets
 const Ids = ["batman","superman", "ironman" ] ;

 let myobj = {
    name: "haris",
    age: 27
 }

 const myFunction= function(){
    console.log("Hello World");
 }
//  console.log(typeof anotherId);
//  console.log(typeof myValue);
// console.log(typeof bigNumber);
// console.log(typeof outTemp);
// console.log(typeof myFunction);


// +++++++++++++++++++++++++++++++++++++++++++++++++Memory+++++++++++++++++++++++++++++++++++++++++++++

// Stack memory is used in all primitive datatypes , In stack we get a copy of whatever variable is declared 
// heap memory is used is non primitive datatypes , In heap we get a refference for orignal value and wahtever change is made it is made in orignal value

let  myRepositname = "harisidrees18"

let anotherReposit = myRepositname
anotherReposit = "harrychaudhry2218"
console.log(myRepositname);

console.log(anotherReposit);

 let firstCst = {
    email: "customer@google.com",
    age: 67
 }
 let secondCst = firstCst
secondCst.email = "harry@google.com"
 console.log(firstCst);
 console.log(secondCst);
 
 