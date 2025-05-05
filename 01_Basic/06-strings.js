const name = "haris"
const bodyCount = 50
// console.log(name + bodyCount) ;

// console.log(`Hello my name is ${name} and i want to fuck ${bodyCount} whores`);

const gameName = new String("Harry-king-pass")
// console.log(gameName[6]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(name.charAt(3));
// console.log(name.indexOf('s'));

const mainString = gameName.substring(2,6)

console.log(mainString);

const proString = gameName.slice(-9,4)
console.log(proString);

const mainStringOne = "    king. edward    "
console.log(mainStringOne);
console.log(mainStringOne.trim());

const url = "https://harry@google.com/harry%10king"
console.log(url.replace('%10','_'));
console.log(url.includes('sport'))
console.log(gameName.split('-'))
