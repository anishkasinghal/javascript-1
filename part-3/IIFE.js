// Immediately Invoked Function Expressions (IIFE)
// Used to prevent the pollution cause by global scope.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('anishka')
