// Advanced
// Compute the nth Fibonacci Number: The fibonacci numbers are represented by the following sequence:

// // fib(n): 1 1 2 3 5 8 13 21
// //         | | | | | |  |  |
// //      n: 0 1 2 3 4 5  6  7
// That is, fib(0) is 1, fib(1) is 1, fib(2) is 2, fib(3) is 3, fib(4) is 5, etc.

// Notice that each fibonacci number can be computed by adding the previous two fibonacci numbers, with the exception of the first two: fib(0) and fib(1). More succinctly,

// fib(0) is 1
// fib(1) is 1
// fib(n) is fib(n - 1) + fib(n - 2)
// Write a function called fib that accepts a number n as a parameter and computes the nth fibonacci number using the above rules.

function fib(num) {
    let a = 1;
    let b = 1;
    let c = 1;
  
    while(num>1) {
      c = a + b;
      a = b;
      b = c;
      num--;
    }
    console.log(c)
  
  }
   
  fib(2);