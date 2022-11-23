// * Marge Sort is a Recursion based sorting Algorithm...

let arr = [4, 1, 0, 8, 2];

function mergeSort(arr, left, right) {

   if (left === right) return;

   let mid = Math.floor((left + right) / 2);

   mergeSort(arr, left, mid);
   mergeSort(arr, mid + 1, right);

   merge(arr, left, right, mid);

} mergeSort(arr, 0, arr.length - 1);

console.log(arr);

function merge(arr, left, right, mid) {

   let leftArr = [];  // * copy of array from left to mid.

   for (let i = left; i <= mid; i++) {
      leftArr.push(arr[i]);
   }

   let rightArr = []; // * copy of array from (mid + 1) to right.

   for (let i = mid + 1; i <= right; i++) {
      rightArr.push(arr[i]);
   }

   let p1 = 0, p2 = 0;
   let low = left;

   while (p1 < leftArr.length && p2 < rightArr.length) {

      if (leftArr[p1] <= rightArr[p2]) arr[low] = leftArr[p1], p1++;
      else arr[low] = rightArr[p2], p2++;

      low++;
   }

   while (p1 < leftArr.length) arr[low] = leftArr[p1], p1++, low++;
   while (p2 < rightArr.length) arr[low] = rightArr[p2], p2++, low++;

}
