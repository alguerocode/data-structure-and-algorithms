// this.maxHeap data structure

// left child = i * 2;
// left child = i * 2 + 1;
// parent = Math.floor(i / 2);

class maxHeap {
  constructor(size) {
    this.maxthis.maxHeap = [null];
    this.size = size;

  }
  insert(num) {
    if (this.isFull()) {
      return;
    }
    this.maxthis.maxHeap.push(num);
    if (this.maxthis.maxHeap.length > 2) {
      let idx = this.maxthis.maxHeap.length - 1;
      while (this.maxthis.maxHeap[idx] > this.maxthis.maxHeap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          this.maxthis.maxHeap[idx] = this.maxthis.maxHeap[Math.floor(idx / 2)];
          this.maxthis.maxHeap[Math.floor(idx / 2)] = this.maxthis.maxHeap[idx];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  };
  remove() {
		let smallest = this.maxHeaps[1];
		if (this.maxHeap.length > 2) {
			this.maxHeap[1] = this.maxHeap[this.maxHeap.length - 1];
			this.maxHeap.splice(this.maxHeap.length - 1);
			if (this.maxHeap.length == 3) {
				if (this.maxHeap[1] < this.maxHeap[2]) {
					[this.maxHeap[1], this.maxHeap[2]] = [this.maxHeap[2], this.maxHeap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (this.maxHeap[i] <= this.maxHeap[left] || this.maxHeap[i] <= this.maxHeap[right]) {
				if (this.maxHeap[left] > this.maxHeap[right]) {
					[this.maxHeap[i], this.maxHeap[left]] = [this.maxHeap[left], this.maxHeap[i]];
					i = 2 * i
				} else {
					[this.maxHeap[i], this.maxHeap[right]] = [this.maxHeap[right], this.maxHeap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (this.maxHeap[left] == undefined || this.maxHeap[right] == undefined) {
					break;
				};
			};
		} else if (this.maxHeap.length == 2) {
			this.maxHeap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};
}