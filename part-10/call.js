function SetUsername(username){
  //complex DB calls
  this.username = username
  console.log("called");
}

function createUser(username, email, password){
  SetUsername.call(this, username)
  this.email = email
  this.password = password
}

const my_user = new createUser("anishka", "anishka@fb.com", "123")
console.log(my_user);