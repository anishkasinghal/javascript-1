const name = "anishka"
const repoCount = 50

// console.log(name + repoCount + " Value");
// OLD WAY OF SYNTAX

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// NEW AND BETTER WAY OF SYNTAX

const gameName = new String('anishka-as-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   anishka    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anishka.com/anishka%20singhal"

console.log(url.replace('%20', '-'))

console.log(url.includes('pretty'))

console.log(gameName.split('-'));