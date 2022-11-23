// ? Generate all the subsequence of the given string...

let str = 'abcd';
let bag = [];

function gs(str, bag, index) {
   if (bag.length !== 0) console.log(bag.join(''));
   if (index === str.length) return;

   for (let i = index; i < str.length; i++) {
      bag.push(str[i]);
      gs(str, bag, i + 1);
      bag.pop();
   }
} gs(str, bag, 0);
