class TreeNode {
   constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
   }
}


let node1 = new TreeNode(5);
let node2 = new TreeNode(10);
let node3 = new TreeNode(17);

node1.left = node2;
node1.right = node3;

console.log(node1);