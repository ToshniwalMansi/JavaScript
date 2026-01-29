// Problem: Create Hello World Function
// Link: https://leetcode.com/problems/create-hello-world-function/

/**
 * This is the "Factory" function.
 * It returns another function that always returns "Hello World".
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    };
};

// --- TESTING THE CODE ---
// This part allows someone to run your file and see a result.
const f = createHelloWorld();
console.log(f()); // Expected Output: "Hello World"
