console.log(2 > 1);
// true
console.log(2 >= 1);
// true
console.log(2 < 1);
// false
console.log(2 == 1);
// false
console.log(2 != 1);
// true


console.log("2" > 1);
// true
console.log("02" > 1);
// true


// Try to avoid these types of codes.
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === -> strict check

console.log("2" === 2);
// False