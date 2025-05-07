let user ={
    username: "harry",
    weight : 38,
    wellcomemessage: function(){
        console.log(`${this.username}, "welcome to my website"`)
        console.log(this)
    }
}
// user.wellcomemessage()
// user.username= "capy"
// user.wellcomemessage()


// function king(){
//     let username = "arsd"
//     console.log(this)
// }
// king()
// let king = function(){
//     let username = "absd"
//     console.log(this.username)
// }
// king()

// let king = () => {
//     let username = "adsd"
//     console.log(this)
// }
// console.log(king())

let addition = (num1,num2) => num1+num2
console.log(addition(65,70))