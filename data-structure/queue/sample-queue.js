class Queue {
  constructor(fullSize) {
    this.queue = [];
    this.rear = -1;
    this.front = -1;
    this.arrSize = parseInt(fullSize);
  }
  enqueue(item) {
    if (this.rear === this.arrSize - 1) { // true => full queue
      return;
    }
    if (this.front = -1) { this.front = 0 }; // enqueue action
    this.rear += 1;
    this.queue[this.rear] =item;
  }
  dequeue() {
    if (this.arrSize === this.front || this.front === -1) { // true => empty queue
      return;
    } 
    this.queue[this.front] = null; // dequeue action 
    if(this.front >= this.rear) {  // if empty => reset 
      this.rear = -1;
      this.front = -1;
    } else { // else increase the head or front
      this.front += 1
    }
  }
}
const newQueue = new Queue(5);
console.log(newQueue)
newQueue.enqueue(3);
newQueue.dequeue();






