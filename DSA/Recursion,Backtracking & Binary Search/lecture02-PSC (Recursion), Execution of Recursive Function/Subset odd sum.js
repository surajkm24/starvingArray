// * Given an array A having N positive integers.
// ? Count the number of non - empty subsequences of array A such that for each subsequence, the sum of all it's elements is odd.

const arr = [4, 3, 2, 1];

let count = 0;

for (let i = 0; i < arr.length; i++) oddSum(0, i, arr[i]);

console.log(count);

function oddSum(sum, i, num) {
   sum += num;

   if (sum % 2 === 1) count++;
   for (let j = i + 1; j < arr.length; j++) oddSum(sum, j, arr[j]);
}

