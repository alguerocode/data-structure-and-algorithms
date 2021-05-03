// heap data structure

// left child = i * 2;
// left child = i * 2 + 1;
// parent = Math.floor(i / 2);

class MinHeap {
  constructor(size) {
    this.maxHeap = [null];
    this.size = size;

  }
  insert(num) {
    if (this.isFull()) {
      return;
    }
    this.maxHeap.push(num);
    if (this.maxHeap.length > 2) {
      let idx = this.maxHeap.length - 1;
      while (this.maxHeap[idx] > this.maxHeap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          this.maxHeap[idx] = this.maxHeap[Math.floor(idx / 2)];
          this.maxHeap[Math.floor(idx / 2)] = this.maxHeap[idx];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  }
  remove() {
    if (this.isEmpty()) {
      return;
    }
  }
  isFull() {
    if (this.maxHeap.length - 1 === this.size) {
      console.log('the heap is full');
      return true
    }
    return false
  }
  isEmpty() {
    if (this.maxHeap.length <= 1) {
      console.log('the heap is empty')
      return true
    }
    return false
  }
}