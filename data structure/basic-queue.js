class Queue {
  constructor(fullSize) {
    this.queue = [];
    this.rear = -1;
    this.front = -1;
    this.arrSize = parseInt(fullSize);
  }
  enqueue(item) {
    if (this.rear === this.arrSize - 1) {
      console.log('array full');
      return;
    }
    if (this.front = -1) { this.front = 0 };
    this.rear += 1;
    this.queue[this.rear] =item;
    console.log(this.queue, this.front, this.rear);
  }
  dequeue() {
    if (this.arrSize === this.front || this.front === -1) {

      console.log('the queue is empty',this.queue);
      return;
    } 
    this.queue[this.front] = null;
    if(this.front >= this.rear) {
      this.rear = -1;
      this.front = -1;
    } else {
      this.front += 1
    }
    console.log(this.queue, this.front, this.rear);
  }
}
const newQueue = new Queue(5);
console.log(newQueue)
newQueue.enqueue(3);
newQueue.enqueue(3);
newQueue.enqueue(3);
newQueue.enqueue(3);
newQueue.enqueue(3);
newQueue.enqueue(3);
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.enqueue(3);
newQueue.enqueue(3);
newQueue.enqueue(3);
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.enqueue(3);
newQueue.enqueue(3);






