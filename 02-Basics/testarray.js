let myObj = {
    // ["phone"]: 4,
    phone: 2,

}
console.log(myObj["phone"])

let School = {
    Department: {
        Class1: {
            Student: {
                Male: [
                    "Haider",
                    "Harry",


                ],
                Female: [
                    "Female1",
                    "Female2"

                ],
            },
            Teacher: {
                Male: [
                    "Teacher1",
                    "Teacher2",

                ],
                Female: [
                    "FeTeacher1",
                    "FeTeacher2"

                ],

            },

        },
        Class2: {
            Student: {
                Male: [
                    "king",
                    "prince"

                ],
                Female: [
                    "queen",
                    "princess"
                ],

            },

            Teacher: {
    
                Male: [
                    "male1",
                    "male2"
                ],
                Female: [
                    "girl1",
                    "girl2"
    
                ],
    
            },
        },
    }

}

let gender = "Female"

let batch = "Class2"

let king = "Teacher"

let department = School.Department
console.log(department[batch])




