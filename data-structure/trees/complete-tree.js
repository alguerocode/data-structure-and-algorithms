// implementaion of complete bainary tree;



// representation of bainary tree;

class TreeNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}


// count the number of nodes in tree;

function countNodes(root) {
  if(root == null) {
    return 0;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
}

// check is complete bainary tree;

function isCompleteTree(root,numberOfNodes, index = 0) {
  if(root == null) {
    return true;
  }
  if(index >= numberOfNodes) {
    return false;
  }
  return isCompleteTree(root.left,numberOfNodes, (index * 2) + 1) && isCompleteTree(root.right, numberOfNodes, (index * 2) + 2);
}

//test 
const headNode = new TreeNode(1);
headNode.left = new TreeNode(2);
headNode.right = new TreeNode(3);
headNode.left.left = new TreeNode(4);
headNode.left.right= new TreeNode(6);
headNode.right.right= new TreeNode(7);
headNode.right.left= new TreeNode(8);

if(isCompleteTree(headNode, countNodes(headNode))){
  console.log('is complete bainary tree');
} else {
  console.log('is not complete bainary tree');
}