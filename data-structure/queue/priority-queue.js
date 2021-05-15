// priority queue with max heap data structure;
// for min and max heap data structure look at heap data structure directory;

class MaxPriorityQueue {
  constructor(size) {
    this.size = size;
    this.queue = [];
    this.parentIndex = (i) => Math.floor(i - 1 / 2);
    this.l_index = (i) => i * 2 + 1;
    this.r_index = (i) => i * 2 + 2;
  }
  insert(item) {
    if (isNaN(item)) { throw new Error('the argument must be a comparable or number') }
    if (this.queue.length >= this.size) {
      console.log('the array is full')
      return;
    }
    this.queue.push(item);
    this.heapifyUp();
    console.log(this.queue);
    return item;
  }
  remove(item) {
    if (isNaN(item)) { throw new Error('the argument must be a comparable or number') }
    if (this.queue.length <= 0) {
      console.log('the array is empty')
      return;
    }
    let itemIndex;
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i] === item) {
        itemIndex = i;
        break;
      }
    }
    if (isNaN(itemIndex)) {
      console.log('the item arent there')
      return;
    } // check for item are exists; 
    [this.queue[itemIndex], this.queue[this.queue.length - 1]] = [this.queue[this.queue.length - 1], this.queue[itemIndex]]
    this.queue.pop();
    this.heapifyDown(itemIndex);
    console.log(this.queue);
    return item
  }
  heapifyUp() {
    let index = this.queue.length - 1;
    while (this.parentIndex(index) >= 0 && this.queue[this.parentIndex(index)] < this.queue[index]) {
      [this.queue[index], this.queue[this.parentIndex(index)]] = [this.queue[this.parentIndex(index)], this.queue[index]];
      index = this.parentIndex(index);
    }
  }
  heapifyDown(rm_index) {
    let index = rm_index;
    while (this.l_index(index) < this.queue.length) {
      let childIndex = this.l_index(index);
      if (this.r_index(index) < this.queue.length &&
        this.queue[this.l_index(index)] < this.queue[this.r_index(index)]
      ) { childIndex = this.r_index(index); }
      if (this.queue[childIndex] > this.queue[index]) {
        [this.queue[childIndex], this.queue[index]] = [this.queue[index], this.queue[childIndex]];
        index = childIndex
      } else {
        break;
      }
    }
  }
}
const priorityQueue = new MaxPriorityQueue(10);
priorityQueue.insert("ITEM");
priorityQueue.remove("ITEM"); 


