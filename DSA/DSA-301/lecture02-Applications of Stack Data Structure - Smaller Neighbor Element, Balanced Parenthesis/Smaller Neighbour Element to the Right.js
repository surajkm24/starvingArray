
var arr = [7, 3, 5, 2, 9, 11];

var stack = [];
var bag = [];

/*
for(var i = arr.length - 1; i >= 0; i--) {
   if(stack.length == 0) bag.push(-1);
   else if(stack[stack.length - 1]<arr[i]) bag.push(stack[stack.length - 1]);
   else if(stack[stack.length - 1]>=arr[i]) {
      while(stack[stack.length - 1]>=arr[i]) stack.pop();
      if(stack.length == 0) bag.push(-1);
      else bag.push(stack[stack.length - 1]);
   }stack.push(arr[i]);
}console.log(bag.reverse().join(' '));
*/

for(let i = arr.length - 1; i >= 0; i--) {
   while(stack.length != 0 && stack[stack.length - 1] >= arr[i]) stack.pop();
   if(stack.length == 0) bag.push(-1);
   else if(stack[stack.length - 1] < arr[i]) bag.push(stack[stack.length - 1]);
   stack.push(arr[i]);
}console.log(bag.reverse().join(' '));