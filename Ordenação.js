function quicksort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = [], right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    
    return [...quicksort(left), pivot, ...quicksort(right)];
}

module.exports = { quicksort };

// Opcional:
// console.log(quicksort([10, 7, 8, 9, 1, 5]));
