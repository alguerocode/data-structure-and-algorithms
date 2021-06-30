// the full bainary tree;

// the parent of full bainary tree must have two child or nothing ;




class TreeNode {
  constructor(data) {
    this.data =data;
    this.right = null;
    this.left = null;
  }
}

function isFullBainaryTree(node) {
  if(node == null) {
    return true;
  }
  if(node.left == null && node.right == null) {
    return true
  }
  if(!!node.left && !!node.right) {
    return isFullBainaryTree(node.left) && isFullBainaryTree(node.right);
  }
  return false
}
const headNode = new TreeNode(1);
headNode.left = new TreeNode(2);
headNode.right = new TreeNode(3);
headNode.left.left = new TreeNode(4);
headNode.left.right= new TreeNode(5);

console.log(isFullBainaryTree(headNode))