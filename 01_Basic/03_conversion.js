let my = "null"

console.log(typeof my);

console.log(typeof (my));

let value = Number(my)
console.log(typeof value);
console.log(value);

// "50" in form of string is easily converted to number 50//

// "50abc" this string is converted to number ut gives a NaN value//

//boolean value true is converted top 1
let h = 5
let b = Boolean(h)
console.log(b);

//1 =. true 0=> false//
// "" an empty string is also converted to false
// if string has some value it is converted to true