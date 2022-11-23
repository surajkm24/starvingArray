function numberOfWays(n) {

   if (n < 0) return 0;
   if (n === 0) return 1;

   return numberOfWays(n - 1) + numberOfWays(n - 2) + numberOfWays(n - 3);

} console.log(numberOfWays(4));

