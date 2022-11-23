// You are given two numbers nand k. The number p is created by concatenating the string n k times.

// we need to find the super digit of the integer p

// We define super-digit of an integer p using the following rules:

// If p has only 1 digit, then it's super-digit is 1.
// Otherwise, the super-digit of p is equal to the super-digit of the sum of the digits of p.

let [n, k] = ['148', '3'];

let sum = 0;

for (let i = 0; i < n.length; i++) {
   sum += +n[i];
} sum *= k;

function superDigit(n) {

   if(Number(n) < 10) return Number(n);

   let sum = 0;

   for(let i = 0; i < n.length; i++) {
      sum += +n[i];
   }

   return superDigit(sum.toString());

} console.log(superDigit(sum.toString()));