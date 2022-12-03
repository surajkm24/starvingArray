let arr = [1, 2, 3];
let current = 0;

let newArray = [];

function gp(arr, current) {
   if (current === arr.length - 1) {
      newArray.push(arr.join(' '));
      return;
   }

   for (let i = current; i < arr.length; i++) {
      swap(arr, current, i);
      gp(arr, current + 1);
      swap(arr, current, i);
   }
} gp(arr, current);


function swap(arr, current, i) {
   let temp = arr[current];
   arr[current] = arr[i];
   arr[i] = temp;
}

newArray.sort();

for (let i in newArray) {
   console.log(newArray[i]);
}
