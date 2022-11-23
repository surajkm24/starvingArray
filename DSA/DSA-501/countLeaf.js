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
let node4 = new TreeNode(7);
let node5 = new TreeNode(19);
let node6 = new TreeNode(14);
let node7 = new TreeNode(21);

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;


function countLeaf(root) {

   if (root === null) return 0;
   
   if (root.left === null && root.right === null) return 1; //* no child
   else return countLeaf(root.left) + countLeaf(root.right);

} console.log(countLeaf(node1));