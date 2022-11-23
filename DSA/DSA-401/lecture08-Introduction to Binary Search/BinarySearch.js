// ? Searching for "k" is present in the array or not...

const arr = [1, 2, 7, 14, 18, 21];

const k = 18;

function binarySearch(arr, k) {

   let low = 0;
   let high = arr.length - 1;

   while (low <= high) {

      let mid = Math.floor(low + ((high - low) / 2));

      if (arr[mid] === k) return true;
      else if (arr[mid] > k) high = mid - 1;
      else low = mid + 1;

   } return false;

} let ans = binarySearch(arr, k);

ans ? console.log(true) : console.log(false);

