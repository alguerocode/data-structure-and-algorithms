// this.maxHeap data structure

// left child = i * 2 + 1;
// left child = i * 2 + 2;
// parent = Math.floor(i - 1) / 2;

class MinHeap {
	constructor(size) {
		this.size = size;
		this.heap = [];
		this.lIndex = (i) => i * 2 + 1;
		this.rIndex = (i) => i * 2 + 2;
		this.parentIndex = (i) => Math.floor((i - 1) / 2);
	}
	heapfiyUp() {
		let index = this.heap.length - 1;
		while (this.parentIndex(index) >= 0 && this.heap[index] < this.heap[this.parentIndex(index)]) {
			this._swap(index,this.parentIndex(index));
			index = this.parentIndex(index);
		}
	}
	heapifyDown() {
		let index = 0;
		while (this.lIndex(index) < this.heap.length) {
			let smallerChildIndex = this.lIndex(index);
			if (this.rIndex(index) < this.heap.length && this.heap[this.rIndex(index)] < this.heap[this.lIndex(index)]) {
				smallerChildIndex = this.rIndex(index);
			}
			if (this.heap[index] > this.heap[smallerChildIndex]) {
				this._swap(index, smallerChildIndex);
				index = smallerChildIndex;
			} else {
				break;
			}
		}
	}
	insert(item) {
		if (item === NaN) { return new Error('the argument should a number') };
		if (this._isFull()) { return };
		this.heap.push(item);
		this.heapfiyUp();
		console.log(this.heap)
	}
	_swap(indexOne, indexTwo) {
		[this.heap[indexOne], this.heap[indexTwo]] = [this.heap[indexTwo], this.heap[indexOne]];
	}
	_peek() {
		if (!this._isEmpty()) {
			return this.heap[0];
		}
	}
	_isFull() {
		if (this.heap.length -1 === this.size) {
			console.log('the heap is full');
			return true;
		}
		return false;
	}
	poll() {
		if (this._isEmpty()) { return };
		let item = this.heap[0];
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap.pop()
		this.heapifyDown();
		console.log(this.heap)
		return item;
	}
	_isEmpty() {
		if (this.heap.length === 0) {
			console.log('the heap is empty');
			return true;
		}
		return false;
	}
}
const heap = new MinHeap(10);
console.log(heap)
