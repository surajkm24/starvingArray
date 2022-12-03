var stack = [];
var top = -1;
var maxSize = 4;

function push(x) {
   if(isFull() == true) {
      console.log('OVERFLOW');
   }else {
      top++;
      stack[top] = x;
   }
}

function isFull() {
   if(top == maxSize-1) return true;
   return false;
}

for(let i=0; i<4; i++) {
   push(i);
}console.log(stack);

