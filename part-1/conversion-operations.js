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

// =============== OPERATIONS =================

let value = 3
let negValue = -value;
console.log(negValue);

console.log(2+2);
// 4
console.log(2-2);
// 0
console.log(2*2);
// 4
console.log(2/2);
// 1
console.log(2%2);
// 0
console.log(2**2);
// 4


let str1 = "HELLO"
let str2 = " WORLD"
let str3 = str1 + str2;

console.log(str3);
// HELLO WORLD

console.log("1" + 2);
// 12
console.log(1 + "2");
// 12
console.log("1" + 2 + 2);
// 122
console.log(1 + 2 + "2");
// 32
console.log( (3 + 4) * 5 % 3);
// 2


console.log(+true);
// 1
console.log(+"");
// 0


// Prefix and Postfix increament
// Read documentation