// implementing linear search algorithm

function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            return i
        }
    }
    return -1
};
console.log(linearSearch([1,34,6,3,2],3));
console.log(linearSearch([1,34,6,3,2],5));
            
