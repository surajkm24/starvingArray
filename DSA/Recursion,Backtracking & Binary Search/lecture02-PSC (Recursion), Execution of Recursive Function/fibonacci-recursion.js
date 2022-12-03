// * Fibonacci Series -> the Fibonacci sequence, in which each number is the sum of the two preceding ones.
// * The sequence commonly starts from 0 and 1. 


function fib(n) {

   if (n === 0 || n === 1) return n;

   return fib(n - 1) + fib(n - 2);

} console.log(fib(4));

