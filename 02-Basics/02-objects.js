// singleton
//  Object.create

//  object litterals
const mySym = Symbol("key1")
const School = {
    name : "Haris",
    age : 27,
    "full name": "Muhammad Haris",
    [mySym]: 'key1',
    email :"haris@google.com" ,
    location: "faisalabad",
    isLoggedIn: false
}
console.log(School.name);
console.log(School["age"])
console.log(School["full name"])
console.log( School[mySym])

School.email="harry@chatgpt.com"
console.log(School)
Object.freeze(School)
School.name="kinza"
console.log(School)