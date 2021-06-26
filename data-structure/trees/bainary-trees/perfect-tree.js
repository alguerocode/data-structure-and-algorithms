// implementaion of perfect bainary tree;



// representation of bainary tree;

class TreeNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

// calculation the levels of bainary tree;

function calcDepth(node) {
  let depth = 0;
  while(node != null) {
    depth += 1;
    node = node.left;
  }
  return depth;
}


// check is perfect bainary tree;


function isPerfectBainaryTree (node,depth , currentLevel = 1) {
  if(node == null) {
    return true;
  }
  // check the end of operation;
  if(node.right == null && node.left == null) {
    return (depth === currentLevel);
  }
  if(node.right == null || node.left == null) {
    return false;
  }
  return isPerfectBainaryTree(node.left, depth, currentLevel + 1) && isPerfectBainaryTree(node.right, depth, currentLevel + 1);
}

// create real tree
const headNode = new TreeNode(1);
headNode.left = new TreeNode(2);
headNode.right = new TreeNode(3);
headNode.left.left = new TreeNode(4);
headNode.left.right= new TreeNode(6);
headNode.right.right= new TreeNode(7);
headNode.right.left= new TreeNode(8);


// test
if(isPerfectBainaryTree(headNode, calcDepth(headNode))) {
  console.log('is perfect bainary tree');
} else {
  console.log('is not perfect bainary tree');
}