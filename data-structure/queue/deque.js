//implementing deque queue;

// a deque is double ended queue;

class Deque {
  constructor(size) {
    this.size = size - 1;
    this.front = -1;
    this.rear = -1;
    this.queue = [];
  }
  isFull() {
    if (this.front === this.rear + 1 || (this.front === 0 && this.rear === this.size)) {
      console.log('the queue is full')
      return true;
    }
    return false;
  }
  isEmpty() {
    if (this.front === -1) {
      console.log('the queue is empty');
      return true;
    }
    return false;
  }
  frontInsert(item) {
    if (isNaN(item)) {
      throw new Error('the argument must be a number');
    }
    if (this.isFull()) {
      return;
    }
    if (this.front === 0) {
      this.front = this.size;
      this.queue[this.front] = item;
    } else {
      if (this.front === -1) {
        this.front = 0;
        this.rear = 0;
        this.queue[this.front] = item;
      } else {
        this.front--;
        this.queue[this.front] = item;
      }
    }
    console.log(this.queue);
  }
  rearInsert(item) {
    if (isNaN(item)) {
      throw new Error('argument must be a number');
    }
    if (this.isFull()) {
      return;
    }
    if (this.rear === this.size) {
      this.rear = 0;
      this.queue[this.rear] = item;
    } else {
      this.rear++;
      this.queue[this.rear] = item;
      if (this.front === -1) { this.front = 0 };
    }
    console.log(this.queue);
  }
  frontRemove() {
    if (this.isEmpty()) {
      return;
    }
    if (this.front === this.rear) {
      this.queue[this.front] = null;
      [this.front, this.rear] = [-1, -1];
    } else {

      if (this.front === this.size) {
        this.queue[this.front] = null;
        this.front = 0;
      } else {
        this.queue[this.front] = null;
        this.front++;
      }
    }
    console.log(this.queue);
  }
  rearRemove() {
    if (this.isEmpty()) {
      return;
    }
    if (this.rear === this.front) {
      this.queue[this.front] = null;
      [this.front, this.rear] = [-1, -1];
    } else {
      if (this.rear === 0) {
        this.queue[this.rear] = null
        this.rear = this.size;
      } else {
        this.queue[this.rear] = null;
        this.rear--;
      }
    }
    console.log(this.queue);
    // if this.rear == 0 index
    // the operation
    //if this.rear == front;
    // operation
    // else
  }
}
const deque_queue = new Deque(6);
deque_queue.frontInsert("ITEM");
deque_queue.rearInsert("ITEM");
deque_queue.frontRemove();
deque_queue.rearRemove();
deque_queue.rear;
deque_queue.queue;
deque_queue.front;
deque_queue.size;
