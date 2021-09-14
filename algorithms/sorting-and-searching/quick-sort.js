// implementation of quick sort algorithm.

function pivot(array, left = 0, right = array.length - 1) {
  let shift = left;
  for (let i = left + 1; i <= right; i++) {
    if (array[i] < array[left]) {
      shift++;
      [array[i], array[shift]] = [array[shift], array[i]]; // swap operation
    }
  }
  // finally swap the last;
  [array[left], array[shift]] = [array[shift], array[left]];
  return shift;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

console.log(quickSort([9, 5, 1, 7, 3, 2, 6, 5, 8]));
console.log(quickSort([9, 5, 1, 7, 3, 2, 6, 5, 8]));
