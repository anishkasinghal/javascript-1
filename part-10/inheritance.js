class User {
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User{
  constructor(username, email, password){
    super(username)
    this.email = email
    this.password = password
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}`);
  }
}

const my_user = new Teacher("anishka", "anishka@teacher.com", "123")

my_user.logMe()
const other_user = new User("singhal")

other_user.logMe()

console.log(my_user instanceof User);