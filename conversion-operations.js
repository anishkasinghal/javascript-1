let score = "33"

console.log(typeof score); 
// string
console.log(typeof(score));
// string

let valueInNumber = Number(score)
console.log(typeof score);
// number

score = "33abc"

console.log(typeof score);
// string

valueInNumber = Number(score)
console.log(typeof score);
// number
console.log(valueInNumber);
// NaN -> error, kinda -> for datatypes which can't be converted to numbers, like string, alpha-numeric stuff, undefined, etc.
// and a numberical value for those whch can be converted, eg- bool, number, null(0)


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// ture

// 0 -> false
// "" -> false
// "any random thing written in double quotes" -> true


let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
// 33
console.log(typeof(stringNumber));
// string