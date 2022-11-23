class Node {
   constructor(data, next = null) {
      this.data = data;
      this.next = next;
   }
}

class linkedList {
   constructor() {
      this.head = null;
   }

   insertAtEnd(data) {
      let newNode = new Node(data);

      let current = this.head;

      if (this.head == null) this.head = newNode;
      else {
         while (current.next != null) current = current.next;
         current.next = newNode;
      }
   }

   deleteEnd() {
      let current = this.head;

      while (current.next.next != null) current = current.next;

      current.next = null;
   }

   printMin() {
      let current = this.head;

      let min = Infinity;

      while (current != null) {
         if (current.data < min) {
            min = current.data;
         } current = current.next;
      } console.log(min);
   }

   printList() {
      let current = this.head;

      while (current) {
         console.log(current.data);
         current = current.next;
      }
   }

   checkPalindrome() {
      let p1 = this.head;

      let slow = this.head;
      let fast = this.head;

      while (fast && fast.next) {
         slow = slow.next;
         fast = fast.next.next;
      }

      let curr = slow;
      let future = null;
      let prev = null;

      while (curr) {
         future = curr.next;
         curr.next = prev;
         prev = curr;
         curr = future;
      }

      let p2 = prev;

      while (p2) {
         if (p1.data !== p2.data) return false;
         p1 = p1.next;
         p2 = p2.next;
      } return true;
   }
}

let newNode = new linkedList();

newNode.insertAtEnd(7);
newNode.insertAtEnd(5);
newNode.insertAtEnd(3);
newNode.insertAtEnd(5);
newNode.insertAtEnd(7);

console.log(newNode.checkPalindrome());

