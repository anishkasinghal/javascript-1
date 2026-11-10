// ES6

class User {
  constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
  }

  encryptPassword(){
    return `${this.password}abc`
  }
  changeUsername(){
    return `${this.username.toUpperCase()}`
  }

}

const my_user = new User("anishka", "anishka@gmail.com", "123")

console.log(my_user.encryptPassword());
console.log(my_user.changeUsername());



// behind the scene

function User(username, email, password){
  this.username = username;
  this.email = email;
  this.password = password
}

User.prototype.encryptPassword = function(){
  return `${this.password}abc`
}
User.prototype.changeUsername = function(){
  return `${this.username.toUpperCase()}`
}


const other_user = new User("singhal", "singhal@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());