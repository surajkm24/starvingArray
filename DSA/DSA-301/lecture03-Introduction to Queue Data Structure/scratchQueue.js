
let queue = [];
let front = -1;
let rear = -1;
let maxSize = 7;

// enqueue(x) --------->

function enqueue(x) {
   if (rear == maxSize - 1) console.log('OVERFLOW');
   else {
      if (front == -1 && rear == -1) front++, rear++;
      else rear++;
      queue[rear] = x;
   }
}

// dequeue() --------->

function dequeue() {
   if (front == -1 || front > rear) console.log('UNDERFLOW');
   else {
      console.log('dequeueing ' + queue[front]);
      if (front == rear) front = -1, rear = -1;
      else front++;
   }
}

// front() --------->

function showFront() {
   if (front == -1 || front > rear) console.log('UNDERFLOW');
   else console.log(queue[front]);
}

enqueue(7);
enqueue(9);
showFront();
dequeue();
showFront();
enqueue(5);
dequeue();
showFront();