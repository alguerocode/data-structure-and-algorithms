// implementing insertion sort

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let key = i;
        for(let j = i ;j >= 0;j--) {
            let step = j -1;
            if(arr[key] < arr[step]) {
                [arr[key], arr[step]] = [arr[step], arr[key]];
                key = step ;
            }
        }
    }
    return arr;
}
// testing insertion sort
console.log(insertionSort([9, 5, 1, 7, 3, 2]))
console.log(insertionSort([4, 5, 1, 7, 3, 5]))