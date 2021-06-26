// this data-staructure is to traversal the tree and print the data in three types;
// look the examples below;
// the pratice operation in buttom;
class TreeNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}


function inorder_traversal(node) {
  if (node == null) {
    return;
  }
  inorder_traversal(node.left);
  process.stdout.write(`=>${node.data}`);
  inorder_traversal(node.right);
}


function postorder_traversal(node) {
  if (node == null) {
    return;
  }
  postorder_traversal(node.left);
  postorder_traversal(node.right); 
  process.stdout.write(`=>${node.data}`);
}


function preorder_traversal(node) {
  if (node == null) {
    return;
  }
  process.stdout.write(`=>${node.data}`);
  preorder_traversal(node.left);
  preorder_traversal(node.right);
}

// init the tree;
const headNode = new TreeNode(1);
headNode.left = new TreeNode(2);
headNode.right = new TreeNode(3);
headNode.left.left = new TreeNode(4);
headNode.left.right= new TreeNode(5);
headNode.right.left = new TreeNode(6);
headNode.right.right = new TreeNode(7);



preorder_traversal(headNode);
console.log('')
console.log('-----------------------')

inorder_traversal(headNode);
console.log('');
console.log('-----------------------')

postorder_traversal(headNode);