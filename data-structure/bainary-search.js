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
  if(node == null) {
    return;
  }
  traversalTree(node.left);
  process.stdout.write(`${node.data} => `);
  traversalTree(node.right);
}

function searchNode(node, num) {
  if(!node) { return null }
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
  if(node == null) {
    return new CreateNode(data);
  }
  if(node.data < data) {
    node.right = insertNode(node.right, data);
  }
  if(node.data > data){
    node.left = insertNode(node.left, data);
  }
  return node; // we check do not attach the rest of tree;
};

function deleteNode() { };

//creat bainary tree; 
const headNode = new CreateNode(10);
headNode.left = new CreateNode(6);
headNode.right = new CreateNode(15);
headNode.left.right= new CreateNode(7);
headNode.left.left = new CreateNode(5);
headNode.right.right= new CreateNode(16);
headNode.right.left= new CreateNode(14);

// test search;

console.log('---- search test ----');

console.log(searchNode(headNode, 14));
console.log(searchNode(headNode, 6));
console.log(searchNode(headNode, 3));
console.log(searchNode(headNode, 5));
console.log(searchNode(headNode, 10));

// test insert

console.log('---- insert test -----');

insertNode(headNode,20);
insertNode(headNode,4 );
insertNode(headNode,11);
insertNode(headNode,11);
traversalTree(headNode);
