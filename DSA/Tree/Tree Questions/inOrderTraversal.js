class TreeNode {
   constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
   }
}


let node1 = new TreeNode("A");
let node2 = new TreeNode("B");
let node3 = new TreeNode("C");
let node4 = new TreeNode("D");
let node5 = new TreeNode("E");
let node6 = new TreeNode("F");
let node7 = new TreeNode("G");

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;


function inOrder(root) {

   if (root === null) return; //* base condition

   inOrder(root.left);
   console.log(root.data);
   inOrder(root.right);

} inOrder(node1);