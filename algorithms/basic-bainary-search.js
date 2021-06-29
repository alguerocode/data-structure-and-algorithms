// bainary search 
function bainaryWhile(number, sortedArr) {
  let left = 0;
  let right = sortedArr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (sortedArr[mid] === number) {
      return true;
    } else if (sortedArr[mid] > number) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    console.log(right, left, mid, sortedArr.length)
  }
  return false;
}

//bainary in recursion ;
function bainarySearch(num, arr) {
  let mid = Math.floor((arr.length - 1) / 2);
  console.log(mid, arr.length)
  if (arr[mid] === num) {
    return true;
  } else if (arr[mid] > num) {
    return bainarySearch(num, arr.slice(0, mid - 1));
  } else if (arr[mid] < num) {
    return bainarySearch(num, arr.slice(mid + 1))
  } else {
    return false
  }
}
console.log(bainarySearch(1, [1, 3, 3, 3, 3, 3, 3, 4]))
