var stack = [1, 2, 3, 4, 5, 6, 7];
var top = stack.length-1;

function peek() {
   if(isEmpty() == true) console.log('UNDERFLOW');
   else console.log(stack[top]);
}

function isEmpty() {
   if(top == -1) return true;
   return false;
}

peek();