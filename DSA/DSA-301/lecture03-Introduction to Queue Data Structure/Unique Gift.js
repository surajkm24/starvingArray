let arr = ['a', 'b', 'c', 'a', 'b', 'c'];

function uniqueGift(arr) {

   let ans = [];
   let obj = {};
   let unique = [];

   for (let i = 0; i < arr.length; i++) {

      if (obj[arr[i]] == undefined) obj[arr[i]] = 1;
      else obj[arr[i]]++;

      unique.push(arr[i]);

      while (unique.length != 0) {
         if (obj[unique[0]] > 1) unique.shift();
         else {
            ans.push(unique[0]);
            break;
         }
      }

      if (unique.length == 0) ans.push('#');
   } console.log(ans.join(' '));

} uniqueGift(arr);