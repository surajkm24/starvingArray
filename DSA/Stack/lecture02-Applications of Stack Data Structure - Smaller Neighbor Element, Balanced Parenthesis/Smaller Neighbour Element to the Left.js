
var arr = [3, 7, 4, 11, 9];

var stack = [];
var bag = [];

/*
for(let i = 0; i < arr.length; i++) {
   if(stack.length == 0) bag.push(-1);
   else if(stack[stack.length - 1]<arr[i]) bag.push(stack[stack.length - 1]);
   else if(stack[stack.length -1]>=arr[i]) {
      while(stack[stack.length - 1]>=arr[i]) stack.pop();
      if(stack.length == 0) bag.push(-1);
      else bag.push(stack[stack.length - 1]);
   }stack.push(arr[i]);
}console.log(bag.join(' '));
*/

for(let i = 0; i < arr.length; i++) {
   while(stack.length != 0 && stack[stack.length - 1] >= arr[i]) stack.pop();
   if(stack.length == 0) bag.push(-1);
   else if(stack[stack.length - 1] < arr[i]) bag.push(stack[stack.length - 1]);
   stack.push(arr[i]);
}console.log(bag.join(' '));