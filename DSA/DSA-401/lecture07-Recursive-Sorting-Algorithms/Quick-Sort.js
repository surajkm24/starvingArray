// * Quick Sort is a Recursion based sorting Algorithm...

let arr = [2, 1, 4, 3, 5];

function quickSort(arr, left, right) {
   if (left >= right) return;

   index = partition(arr, left, right);
   quickSort(arr, left, index - 1);
   quickSort(arr, index + 1, right);

} quickSort(arr, 0, arr.length - 1);


console.log(arr);


function partition(arr, left, right) {
   let low = left;
   let high = right;
   let pivot = left;

   while (low < high) {
      while (low < right && arr[low] <= arr[pivot]) low++;
      while (high > left && arr[high] > arr[pivot]) high--;
      if (low < high) swap(arr, low, high);
   } swap(arr, high, pivot);
   return high;
}


function swap(arr, a, b) {
   let temp = arr[a];
   arr[a] = arr[b];
   arr[b] = temp;
}

