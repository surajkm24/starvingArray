let arr = [1, 2, 3, 4, 5];

function printArray(index, arr) {

   if (index == arr.length) return 1;

   return arr[index] * printArray(++index, arr);

} console.log(printArray(0, arr));

