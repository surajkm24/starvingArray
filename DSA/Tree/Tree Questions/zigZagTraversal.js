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
let node4 = new TreeNode(20);
let node5 = new TreeNode(30);
let node6 = new TreeNode(40);
let node7 = new TreeNode(50);

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.right = node7;

node5.left = node6;


function zigZagOrder(root) {

   let q = [];
   q.push(root);

   let level = 0 //* -> left to right

   while (q.length > 0) {

      let length = q.length;
      let ans = [];

      for (let i = 0; i < length; i++) {

         let temp = q.shift();
         ans.push(temp.data);

         if (temp.left) q.push(temp.left);
         if (temp.right) q.push(temp.right);

      }

      if (level % 2 !== 0) ans.reverse();
      console.log(ans.join(' '));
      level++;

   }

} zigZagOrder(node1);