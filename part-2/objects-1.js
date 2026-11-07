// singleton -> Object created using constructer method is a singleton, always.
// Object.create -> Object creation using constructor method

// object literals

const mySym = Symbol("key1")


const JsUser = {
  name: "Anishka",
  "full name": "Anishka Singhal",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "anishka@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)

console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])


JsUser.email = "anishka@chatgpt.com"
// Object.freeze(JsUser) -> No changes are mitigated after this statement.
JsUser.email = "anishka@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`); // Using `` is k/a string interpolation.
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());