
function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("K");
    console.log("A");
}
sayMyName() // Executes this function


// function addTwoNumbers(number1, number2){
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
  // Here values in the () are parameters, basically when we define the function they are parameters
  // let result = number1 + number2
  // return result
  return number1 + number2
}

const result = addTwoNumbers(3, 5)
// Here values in the () are arguments, basically when we call the function they are arguments

// console.log("Result: ", result);




function loginUserMessageOne(username){
  return `${username} just logged in`
}

function loginUserMessageTwo(username = "Dan"){
  if(!username){
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessageOne("hitesh"))
// console.log(loginUserMessageTwo("hitesh"))

// =======================================================================

