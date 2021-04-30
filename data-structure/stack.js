// stack data structure

class Stack {
  constructor(maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
  }
  pushing(item) {
    if (this._isFull()) {
      console.log('stack is full');
      return -1;
    }
    return this.stack.push(item);
  }
  _isEmpty() {
    return this.stack.length <= 0;
  }
  _isFull() {
    return this.stack.length >= this.maxSize;
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  poping() {
    if (this._isEmpty()) {
      console.log('stack is empty');
      return -1;
    }
    return this.stack.pop();
  }
}
const stack = new Stack(5);
stack.pushing(6);
stack.peek();
stack.poping();