// linked list operation ;


class StructNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
};
class LinkedList {
  constructor() {
    this.head = null;
  }
  insertBeginning(data) {
    const newNode = new StructNode(data);
    newNode.next = head;
    this.head = newNode;
  };
  insertEnd(data) {
    let lastNode = this.head
    const newNode = new StructNode(data);
    if (this.head) {
      return this.head = newNode;
    }
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    return lastNode.next = newNode;
  };
  insertIn(position, data) {
    const newNode = new StructNode(data);
    if (this.head) {
      this.head = newNode;
    }
    let nodePos = this.head
    for (let i = 0; i > position; i++) {
      if(nodePos.next === null) {
        return nodePos.next = newNode;
      }
      nodePos = nodePos.next;
    }
    nodePos.next = newNode;
    newNode.next = nodePos.next.next;
  };
  deleteBeginning() {
    if (this.head) {
      return console.log("can`t delete");
    }
    this.head = this.head.next;
  };
  deleteEnd() {
    let lastNode = this.head;
    if (this.head) {
      return console.log("can't delete");
    }
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    lastNode = null;
  };
  deleteIn(position) {

  }
  logLinkedList() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  };
};