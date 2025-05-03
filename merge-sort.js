function mergeSort(array) {
    if(array.length <= 1) {
        return array;
    } else {
        const sortedLeft = mergeSort(array.slice(0, Math.floor(array.length / 2)));
        const sortedRight = mergeSort(array.slice(Math.floor(array.length / 2)));
        return merge(sortedLeft, sortedRight);
    }
}

function merge(sortedLeft, sortedRight) {
    let mergedArray = [];
    let leftIter = 0, rightIter = 0;
    while(leftIter < sortedLeft.length && rightIter < sortedRight.length) {
        if(sortedLeft[leftIter] <= sortedRight[rightIter]) {
            mergedArray.push(sortedLeft[leftIter++]);
        } else {
            mergedArray.push(sortedRight[rightIter++]);
        }
    }
    while(leftIter < sortedLeft.length) mergedArray.push(sortedLeft[leftIter++]);
    while(rightIter < sortedRight.length) mergedArray.push(sortedRight[rightIter++]);
    return mergedArray;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));