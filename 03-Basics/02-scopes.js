let a = 300
const c = 200
if(true){
let a =30
const c = 350
// console.log("Inner", a)
// console.log("Inner", c)
}
// console.log(a)
// console.log(c)

// var is not used to declare a variable because it creates problem with scope while using var
// the value of var declared inside a scope gets outside the scope 


// ===================Nested Scope=================================



function one(){
    let username = "Harry"

    function two(){
        let website = "Google"
        // console.log(username)
    }
    // console.log(website)
    two()
}
one()


if (true) {
    let username = "Harry@"
    if (username==="Harry@") {
        let website = "Google.com"
        // console.log(username + website)
        
    }
    
}
// this is possible because we can declare the function value before declaring the function
addon(10)
function addon(num){
    return num+1

}
// this declaration do not work as we have assigned the function a variable
x(23)
let x = function (num){
    return num+2
}
