// circular queue

class CircularQueue {
  constructor(size) {
    this.size = size;
    this.rear = -1;
    this.front = -1;
    this.queue = [];
  }
  enqueue(item) {// add item ==> return added item
    if (this.isFull()) {
      return;
    }
    if (this.front === -1) {
      this.front = 0;
    }
    if (this.rear === this.size - 1) {
      this.rear = -1;
    }
    this.rear++
    this.queue[this.rear] = item;
    return item
  }
  dequeue() { // delete item ==> return removed item
    if (this.isEmpty()) {
      return;
    }
    const removedItem = this.queue[this.front];
    this.queue[this.front] = null;

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      if (this.front === this.size - 1) {
        this.front = -1
      }
      this.front++;
    }
    return removedItem;
  }
  isFull() { // check queue is full
    if (this.front === 0 && this.rear === this.size - 1 || this.front === this.rear + 1) {
      console.log('queue is full');
      return true;
    }
    return false;
  }
  isEmpty() { // check queue is empty
    if (this.front === -1) {
      console.log('queue is empty');
      return true;
    }
  }
}
const newCircularQueue = new CircularQueue(5);
newCircularQueue.enqueue('ITEM'); // add item
newCircularQueue.dequeue() // return deleted item => pramater => void;




