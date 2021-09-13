// impelmenting bubble sort algorithms

function bubbleSortByDescending(arr = []) {
  if (!Array.isArray(arr)) throw new Error("argument must be array");

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (typeof arr[i] !== "number")
        throw new Error("array must be array of numbers");
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; //swap operations
      }
    }
  }
  return arr;
}
function bubbleSortByAscending(arr) {
  if (!Array.isArray(arr)) throw new Error("argument must be array");

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (typeof arr[i] !== "number")
        throw new Error("array must be array of numbers");
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; //swap operations
      }
    }
  }
  return arr;
}

// test both bubble sort

console.log(bubbleSortByAscending([3, 46, 4, 6, 1, 7, 5]));
console.log(bubbleSortByDescending([3, 46, 4, 6, 2, 7, 5]));
