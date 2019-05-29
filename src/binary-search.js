function binarySearch(arr, num) {

    if (arr === null) {
        throw new Error('array are null');
    }
    if (num === null) {
        throw new Error('number are null');
    }
    if (arr === undefined) {
        throw new Error('array are undefined');
    }
    if (num === undefined) {
        throw new Error('number are undefined');
    }
    if (!arr instanceof Array) {
        throw new Error('array is not an Array');
    }
    if (typeof num !== 'number') {
        throw new Error('typeof number is not a number');
    }


    arr = arr.sort((a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('not all elements in an array of type number');
        }
        return a - b;
    });

    let low = 0,
        high = arr.length - 1,
        middle,
        found = false,
        index = -1;

    while (!found && low <= high) {
        middle = Math.floor((low + high) / 2);

        if (arr[middle] > num) {
            high = middle - 1;
        } else if (arr[middle] < num) {
            low = middle + 1;
        } else if (arr[middle] === num) {
            found = true;
            index = middle;
        }
    }
    return index;
}