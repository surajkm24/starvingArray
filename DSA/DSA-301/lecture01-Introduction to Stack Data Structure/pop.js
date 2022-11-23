var stack = [2, 1, 5, 3, 4];
var top = stack.length;

function pop() {
   if(isEmpty() == true) console.log('UNDERFLOW');
   else {
      top--;
      var arr = [];
      for(let i=0; i<top; i++) {
         arr.push(stack[i]);
      }stack = arr;
   }
}

function isEmpty() {
   if(top == -1) return true;
   return false;
}

pop();
console.log(stack);

