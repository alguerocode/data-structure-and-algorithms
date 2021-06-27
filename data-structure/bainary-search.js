// the bainarry search implementaion;


// bainary tree representaion;


class CreateNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


function searchNode(node, num) {
  if (node == null) {
    return null;
  } 
  if (node.data === num) {
    return num;
  }
  else if (node.data <= num) {
    return searchNode(node.right, num)
  } else if (node.data > num) {
    return searchNode(node.left, num)
  }
  return null;
}

function insertNode() {};

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

console.log(searchNode(headNode, 14));
console.log(searchNode(headNode, 6));
console.log(searchNode(headNode, 3));
console.log(searchNode(headNode, 5));
console.log(searchNode(headNode, 10));