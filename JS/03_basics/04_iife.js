// Immediately Invoked Function Expressions (IIFE)  // self-invoking function

// IIFE is a function that runs as soon as it is defined.
(function chai(){   // named IIFE 
    // named IIFE
    console.log(`DB CONNECTED`);
})();              //; is necessary to end the statement in IIFE and to run next iife statement

( (name) => {      // anonymous IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')       // passing an argument to the anonymous IIFE