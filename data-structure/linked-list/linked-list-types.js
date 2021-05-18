// singly linked list
class SingleNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// init the nodes in single linked list 
const singleNodeOne = new SingleNode(1);
const singleNodeTwo = new SingleNode(2)
singleNodeOne.next = singleNodeTwo;
singleNodeTwo.next = null;

// doubly linked list
class DoubleNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}


// initial the nodes in doubly linked list
const doubleNodeOne = new DoubleNode(1);
const doubleNodeTwo = new DoubleNode(2);
// one node 
doubleNodeOne.next = doubleNodeTwo;
doubleNodeOne.prev = null;
// two node 
doubleNodeTwo.next = null;
doubleNodeTwo.prev = doubleNodeOne;


// circular linked list 
class circularNode {
  constructor(data) {
    this.data = data;
    this.next = null;

  }
}
// init the circural linked list;
const cirNodeOne = new circularNode(1);
const cirNodeTwo = new circularNode(2);
const cirNodeThree = new circularNode(3);
// the last node points to first node in linked list ;
cirNodeOne.next = cirNodeTwo;
cirNodeTwo.next = cirNodeThree;
cirNodeThree.next = cirNodeOne;