// the bainarry search implementaion;


// bainary tree representaion;


class CreateNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function traversalTree(node) {
  if (node == null) {
    return;
  }
  traversalTree(node.left);
  process.stdout.write(`${node.data} => `);
  traversalTree(node.right);
}

function searchNode(node, num) {
  if (!node) { return null }
  if (node.data === num) {
    return num;
  }
  else if (node.data < num) {
    return searchNode(node.right, num)
  } else if (node.data > num) {
    return searchNode(node.left, num)
  }
}

function insertNode(node, data) {
  if (node == null) {
    return new CreateNode(data);
  }
  if (node.data <= data) {
    node.right = insertNode(node.right, data);
  }
  if (node.data > data) {
    node.left = insertNode(node.left, data);
  }
  return node; // we check do not attach the rest of tree;
};

function findInorderSuccessor(node) {
  let current  = node;
  while(current.left !== null) {
    current = current.left;
  }
  return current;
}

function deleteNode(data, node) {
  if (node == null) {
    return null;
  } else if (node.data > data) {
    node.left = deleteNode(data, node.left);
  } else if (node.data < data) {
    node.right = deleteNode(data, node.right);
  } else { // if have one child or none
    if (node.left == null) {
      const temp = node.right;
      node = null;
      return temp
    } else if (node.right == null) {
      const temp = node.left;
      node = null
      return temp
    }
    {/*if have two child 
     find the inorder successor
     replace node with inorderSuccessor*/}
    node.data = findInorderSuccessor(node.right).data;
    node.right = deleteNode(node.data, node.right);
  }
  return node;
};

//creat bainary tree; 
const headNode = new CreateNode(10);
headNode.left = new CreateNode(6);
headNode.right = new CreateNode(15);
headNode.left.right = new CreateNode(7);
headNode.left.left = new CreateNode(5);
headNode.right.right = new CreateNode(16);
headNode.right.left = new CreateNode(14);

// test search;

console.log('----- search test -----');

console.log(searchNode(headNode, 14));
console.log(searchNode(headNode, 6));
console.log(searchNode(headNode, 3));
console.log(searchNode(headNode, 5));
console.log(searchNode(headNode, 10));

// test insert

console.log('----- insert test -----');

insertNode(headNode, 20);
insertNode(headNode, 4);
insertNode(headNode, 11);
insertNode(headNode, 11);
traversalTree(headNode);

// test delete 

console.log('\n\n----- delete test -----');

// deleteNode(11, headNode);
console.log(deleteNode(4, headNode))
console.log(deleteNode(6, headNode))
console.log(deleteNode(11, headNode))
console.log(deleteNode(20, headNode))
console.log(deleteNode(6, headNode))

traversalTree(headNode);