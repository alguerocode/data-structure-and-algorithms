// implemenation of quick sort algorithm.

function merger(leftArr, rightArr) {
  let i = 0;
  let j = 0;
  const mergedArr = [];
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] > rightArr[j]) mergedArr.push(rightArr[j++]);
    else mergedArr.push(leftArr[i++]);
  }
  while (i < leftArr.length) {
    mergedArr.push(leftArr[i++]);
  }
  while (j < rightArr.length) {
    mergedArr.push(rightArr[j++]);
  }
  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return merger(left, right);
}
console.log(mergeSort([4, 2, 4, 2, 8, 5, 3, 9, 0]));
console.log(mergeSort([6, 9, 1, 3, 5, 8, 0, 2, 10]));
