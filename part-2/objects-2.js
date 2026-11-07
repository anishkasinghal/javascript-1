// const youtubeUser = new Object() -> This is a singleton object
const youtubeUser = {} // This is a non-signleton object

youtubeUser.id = "123abc"
youtubeUser.name = "Ethan"
youtubeUser.isLoggedIn = false

// console.log(youtubeUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "anishka",
      lastname: "singhal"
    }
  }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
  {
    id: 1,
    email: "a@gmail.com"
  },
  {
    id: 1,
    email: "a@gmail.com"
  },
  {
    id: 1,
    email: "a@gmail.com"
  },
]

users[1].email
console.log(youtubeUser);

console.log(Object.keys(youtubeUser));
console.log(Object.values(youtubeUser));
console.log(Object.entries(youtubeUser));

console.log(youtubeUser.hasOwnProperty('isLoggedIn'));

// =======================================================================


const course = {
  coursename: "js",
  price: "999",
  courseInstructor: "anishka"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//   "name": "anishka",
//   "coursename": "js",
//   "price": "free"
// }

[
  {},
  {},
  {}
]
