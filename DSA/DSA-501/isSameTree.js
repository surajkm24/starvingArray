class TreeNode {
   constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
   }
}


let node1 = new TreeNode(10);
let node2 = new TreeNode(5);
let node3 = new TreeNode(7);
let node4 = new TreeNode(15);

node1.left = node2;
node1.right = node3;

node3.left = node4;


let root1 = new TreeNode(10);
let root2 = new TreeNode(5);
let root3 = new TreeNode(7);
let root4 = new TreeNode(15);

root1.left = root2;
root1.right = root3;

root3.left = root4;


function isSameTree(root1, root2) {

   if (root1 === null && root2 === null) return true;
   if (root1 === null || root2 === null) return false;
   
   return (root1.data === root2.data) && isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);

}

console.log(isSameTree(node1, root1));