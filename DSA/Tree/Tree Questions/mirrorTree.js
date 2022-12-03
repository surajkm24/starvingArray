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


node1.left = node2;
node1.right = node3;

node2.right = node4;

node4.left = node5;


function Mirror(root) {

   if (root === null) return;

   swap(root); // swap the left & right child.

   Mirror(root.left);
   Mirror(root.right);
   
   return root;

} console.log(Mirror(node1));


function swap(node) {

   // if both null, then return
   
   let temp = node.left;
   node.left = node.right;
   node.right = temp;

}