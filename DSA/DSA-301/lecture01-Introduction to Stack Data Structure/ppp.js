var stack = [];
var top = -1;
var maxSize = 5;

function push(x) {
   if(isFull() == true) console.log('OVERFLOW');
   else stack[++top] = x;
}

function isFull() {
   if(top == maxSize-1) return true;
   return false;
}

function pop() {
   if(isEmpty() == true) console.log('UNDERFLOW');
   else {
      console.log(stack[top], 'is Poped. ');
      top--;
   }
}

function peek() {
   if(isEmpty() == true) console.log('UNDERFLOW');
   else console.log(stack[top], 'is the Peek element. ');
}

function isEmpty() {
   if(top == -1) return true;
   return false;
}

for(let i=0; i<maxSize; i++) {
   push(i);
}console.log(stack);

pop();
peek();