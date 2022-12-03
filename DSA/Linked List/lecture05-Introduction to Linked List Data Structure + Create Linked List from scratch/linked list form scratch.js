class Node{
   constructor(data, next = null) {
      this.data = data;
      this.next = next;
   }
}

class linkedList{
   constructor() {
      this.head = null;
   }

   insertAtEnd(data) {
      let newNode = new Node(data);

      let current = this.head;

      if(this.head == null) this.head = newNode;
      else {
         while(current.next != null) current = current.next;
         current.next = newNode;
      }
   }

   deleteEnd() {
      let current = this.head;

      while(current.next.next != null) current = current.next;

      current.next = null;
   }

   printMin() {
      let current = this.head;

      let min = Infinity;

      while(current != null) {
         if(current.data < min) {
            min = current.data;
         }current = current.next;
      }console.log(min);
   }
}

let newNode = new linkedList();

newNode.insertAtEnd(7);
newNode.insertAtEnd(9);
newNode.insertAtEnd(3);

newNode.deleteEnd();

newNode.printMin();
console.log(newNode);