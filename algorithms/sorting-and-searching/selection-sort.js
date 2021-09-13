// implementing selection sort;

function selectionSortByAscending(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j;
      }
    }
    [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]]; // swap operation
  }
  return nums;
}

function selectionSortByDescending(nums) {
    for (let i = 0; i < nums.length; i++) {
        let minIndex = i;
        for (let j = i; j < nums.length; j++) {
          if (nums[minIndex] < nums[j]) {
            minIndex = j;
          }
        }
        [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]]; // swap operation
      }
      return nums;
}

// testing;

console.log(selectionSortByAscending([9, 5, 1, 7, 3, 2, 6, 5, 8]));
console.log(selectionSortByDescending([9, 5, 1, 7, 3, 2, 6, 5, 8]));