const user = {
  username: "anishka",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    // console.log(this);
  }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);
// Output: [] (node environment)
// Output: Windoe object (browser)



// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);

  }

  return this
}

const userOne = new User("anishka", 12, true)
const userTwo = new User("mitali", 11, false)

console.log(userOne.constructor);
// So constructor is basically nothing but a reference to oneself/user
// console.log(userTwo);
