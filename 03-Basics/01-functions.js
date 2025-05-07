// function kingEdward(x,y){
//    console.log(x+y) 
// }
function kingEdward(x,y){
   if(x===0,y===0){
console.log("it is not possible")
   }
    let result = x+y 
   return result
}
const result = kingEdward()
// console.log("Result:", result)

function login(User1){
    if (User1===undefined) {
        // console.log("Please provide user1")
        return
    }
    return `${User1} just logged In`
}

// console.log(login("harry"))
//  we will discuss ... or rest operator now
function calculateCartPrice(...num1){
    return num1
    // console.log(num1)
}
// console.log(calculateCartPrice(2,5000,400,200))

// functions with objects

let user1 = {
    username: "Pakistan",
    warhead: 290,
    tanks: 110
}
function handleObject(anyObject){
    return `${anyObject.username} has a total of ${anyObject.warhead} nuclear weapons and ${anyObject.tanks} mordern warfares `
}
//  console.log(handleObject(user1))

 let myArray = [25,55,67,78,90]

 function returnMyValue(toparray){
return toparray[4]
 }
 console.log(returnMyValue(myArray))