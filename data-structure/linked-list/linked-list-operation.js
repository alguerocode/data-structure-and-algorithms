// linked list operation ;


class OperationNode{
  constructor(data) {
    this.data = data;
    this.next =null;
  }
  traverse() {
    let node = this
    while(node.next) {
      console.log(node.data);
      node = node.next;
    }
    console.log(node.data); // to disblay the last data in the list
  }
}
const nodeOne = new OperationNode(1);
const nodetwo = new OperationNode(2);
const nodeThree = new OperationNode(3);

nodeOne.next = nodetwo;
nodetwo.next = nodeThree;
nodeThree.next = null;
nodeOne.traverse()