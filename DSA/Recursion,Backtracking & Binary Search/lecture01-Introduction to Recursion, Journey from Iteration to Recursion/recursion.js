// * Function -> Return statement...
// * Recursion -> Process of defining a problem in terms of itself...


let arr = [4, 3, 8, 2, 5, 7];

function printArray(arr, index) {

   if (index === arr.length) return;

   console.log(arr[index]);
   printArray(arr, ++index);

} printArray(arr, 0);


console.log('-----------'); // ----------------------------->


function factorial(n) {

   if (n === 0 || n === 1) return 1;
   return n * factorial(n - 1);

} console.log(factorial(5));


console.log('-----------'); // ----------------------------->


// * Fibonacci Series -> Every number is a sum of previous two terms...


function fib(n) {

   if (n === 0 || n === 1) return n;
   return fib(n - 1) + fib(n - 2);

} console.log(fib(7));


console.log('-----------'); // ----------------------------->


function check(n) {
   if (n % 2 === 0) return;
   
   for (let i = 0; i < n; i++) {
      console.log(i);
   }
}

check(4);  check(7);


console.log('-----------'); // ----------------------------->


