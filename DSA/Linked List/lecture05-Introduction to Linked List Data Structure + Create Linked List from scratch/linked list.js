class Node{
   constructor(data){
      this.data = data;
      this.next = null;
   }
}

let node1 = new Node(7);
let node2 = new Node(9);

node1.next = node2;

// console.log(node1);

class LinkedList{
   constructor() {
      this.head = null;
   }

   insertAtBegin(data) {
      var newNode = new Node(data);
      
      if(this.head == null) this.head = newNode;
      else {
         newNode.next = this.head;
         this.head = newNode;
      }
      
      // console.log(`insertion at beginning => ${data}`);
   }

   printLinkedList() {
      var current = this.head;
      
      while(current != null) {
         console.log(current.data);
         current = current.next;
      }
   }

   insertAtEnd(data) {
      var newNode = new Node(data);

      var current = this.head;

      while(current.next != null) current = current.next;

      current.next = newNode;
   }
}

let linkedList = new LinkedList();

linkedList.insertAtBegin(7);
linkedList.insertAtBegin(9);
linkedList.insertAtBegin(4);

// linkedList.printLinkedList();

linkedList.insertAtEnd(6);
linkedList.insertAtEnd(8);
linkedList.insertAtEnd(3);

linkedList.printLinkedList();