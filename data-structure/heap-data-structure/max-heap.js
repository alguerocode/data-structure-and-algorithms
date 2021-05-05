// max Heap data structure

// left child = i * 2 + 1;
// left child = i * 2 + 2;
// parent = Math.floor(i - 1) / 2;

class MaxHeap {
	constructor(size) {
		this.size = size;
		this.heap = [];
		this.parentIndex = (i) => (Math.floor(i - 1 / 2));
		this.leftIndex = (i) => i * 2 + 1;
		this.rightIndex = (i) => i * 2 + 2;
	}
	insert(item) {
		if (isNaN(item)) { throw new Error('item argument should be a number') }; // ckeck item is number
		if (this.heap.length === this.size) { // is full
			console.log('the heap is full');
			return;
		}
		this.heap.push(item);
		this.heapfiyUp();
		return item
	}
	poll() {
		if (this.heap.length <= 0) {
			console.log('the is empty');
			return;
		}
		const removedItem = this.heap[0];
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap.pop();
		this.heapifyDown();
		return removedItem;
	}
	heapfiyUp() {
		let index = this.heap.length - 1;// set index of last item
		while (this.parentIndex(index) >= 0 && this.heap[index] > this.heap[this.parentIndex(index)]) { // check if there are more parent 
			[this.heap[index], this.heap[this.parentIndex(index)]] = [this.heap[this.parentIndex(index)], this.heap[index]]; // swap
			index = this.parentIndex(index);
		}
	}
	heapifyDown() {
		let index = 0;
		let smallerChildIndex;
		while (this.leftIndex(index) < this.heap.length) {
			smallerChildIndex = this.leftIndex(index);
			if (this.heap[this.rightIndex(index)] > this.heap[this.leftIndex(index)] && this.rightIndex(index) < this.heap.length) {
				smallerChildIndex = this.rightIndex(index);   
			}
			if(this.heap[smallerChildIndex] > this.heap[index]) {
				[this.heap[smallerChildIndex], this.heap[index]] = [this.heap[index], this.heap[smallerChildIndex]];
				index = smallerChildIndex;
			} else {
				break;
			}
		}
	}
}

const maxHeap = new MaxHeap(10);
maxHeap.insert("ITEM") // insert item to the heap
maxHeap.poll() // poll item from the heap
console.log(maxHeap);



