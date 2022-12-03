// * Dr. Strange has n distinct integers from 1 to n.
// * He uses his mind power and time stone to calculate all the possible subsets using the given n integers.
// ? Generate all the possible subsets...


const n = 3;
let temp = [];

function generateSubsets(n, index, temp) {

   console.log(temp.join(' '));
   if (index > n) return;

   for (let i = index; i <= n; i++) {
      temp.push(i);
      generateSubsets(n, i + 1, temp);
      temp.pop();
   }

} generateSubsets(n, 1, temp);