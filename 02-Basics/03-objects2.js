// const School = new Object()

// School.name="Ali",
// School.RollNo=234,
// School.Class="Class1"
// School.name="Ahmed"
// School.
// console.log(School)

let School = {
    Student1:{
        name: "Ahmed",
        RollNo : 25,
        Class : "Class1"

    },
    Student2:{
name:"Ali",
RollNo:12,
class: "Class2"
    },
Student3:{
    name:"Capy",
    RollNo:30,
    Class:"Class3"
}
}
// console.log(School)

const obj1 = {
    1 :"ali",
    2:"hammad"
}
const obj2 = {
    3:"capy",
    4:"rd"
}

// const obj3 = Object.assign(obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);
// console.log(Object.keys(School))
// console.log(Object.entries(School))
// console.log(Object.values(School))

let pprc = {
    itemname: "pprcpipe",
    price: 2890,
    itemsupplier:"Popular"
}

const{itemsupplier:supplier}=pprc

// console.log(itemsupplier)
console.log(supplier)