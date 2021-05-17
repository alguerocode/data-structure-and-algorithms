// this file for linked-list implementation

class LinkedNode {
  constructor(data, next = null, head) {
    this.data =data;
    this.next = next;
    this.head = head;
  }
  allNextNode =()=> {
    let nextNode = this;
   do {
     console.log(nextNode.data);
     nextNode = nextNode.next;
   } while (nextNode.next);
   console.log(nextNode.data);
  }
}

// testing ;
function testLinkedList() {
  const three = new LinkedNode(4,false ,false);
  const two  =  new LinkedNode(3,three ,false);
  const one =   new LinkedNode(2,two ,false);
  const head =  new LinkedNode(1,one,true);
  head.allNextNode();
}
testLinkedList();