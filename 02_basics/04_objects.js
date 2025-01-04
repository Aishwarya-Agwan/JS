// const firstUser = new Object()
const firstUser = {}

firstUser.id = "123abc"
firstUser.name = "Sam"
firstUser.isLoggedIn = false

// console.log(firstUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aish",
            lastname: "agwan"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
   const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users =  [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },{
        id: 1,
        email: "a@gmail.com"
    }
]

users[1].email
// console.log(firstUser);

// console.log(Object.keys(firstUser));
// console.log(Object.values(firstUser));
// console.log(Object.entries(firstUser));

// console.log(firstUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "javascript",
    price : "999",
    courseInstructor: "aish"
}

//course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]