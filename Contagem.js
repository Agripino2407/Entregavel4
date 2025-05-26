function countInRange(arr, N) {
    let first = arr[0];
    let count = 0;
    for (let num of arr) {
        if (num >= first && num <= N) {
            count++;
        }
    }
    return count;
}

module.exports = { countInRange };