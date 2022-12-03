const n = 240;

function NickHacks(n, i) {

   if (n == i) return true;
   if (i > n) return;

   let m = NickHacks(n, i * 10);
   if (m) return true;
   let d = NickHacks(n, i * 20);
   if (d) return true;

} console.log(NickHacks(n, 1)? 'Yes' : 'No');

