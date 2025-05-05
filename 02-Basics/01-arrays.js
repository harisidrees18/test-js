// ++++++++++++++++++++++++++++++++++++ARRAYS++++++++++++++++++++++++++++++++++++

const myArr = [1,2,4,6,80,10]
const myHeros = ["ironman","batman","hulk"]

const myArr2 = new Array(25,27,48,100,90)
// console.log(myArr[3]);
// console.log(myHeros[2])
// console.log(myArr2[2]);

// myArr.push(30)
// myArr.push(56,70)
// myArr.pop()
// myArr.unshift(0)
// myArr.shift()
// console.log(myArr.includes(80))
// console.log(myArr.indexOf(10));

const value = myArr.join()

// console.log(myArr)
// console.log(typeof myArr);

// console.log(value);
// console.log(typeof value);

// console.log("A",myArr);
const myn1 = myArr.slice(2,4)
// console.log(myn1)
// console.log("B",myArr);

const myn2 = myArr.splice(2,5)
// console.log(myn2);
// console.log("c", myArr);

const class1 = ["ham", "pizza" ,"pasta"]
const class2 = ["beer","cola", "pepsi"]
// class1.push(class2)
// console.log(class1)
// console.log(class1[3][1])

// const allMenu = class1.concat(class2)
// console.log(allMenu)

const Menu = [...class1 , ...class2]
console.log(Menu)
const mainArr = [45,6,7,8,[1,2,3],5,9,[0,2,4,[1,3,9]]]
const realArr = mainArr.flat(3)
console.log(realArr);


console.log(Array.isArray("haris"))
console.log(Array.from("Haris"))