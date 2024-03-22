function areArraysEqual(array1, array2) {
    return JSON.stringify(array1) === JSON.stringify(array2);
}


function areArraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    return array1.every((value, index) => value === array2[index]);
}


function areArraysEqual(array1, array2) {
    return array1.toString() === array2.toString();
}


function areArraysEqual(array1, array2) {
    // Check if arrays have the same length
    if (array1.length !== array2.length) {
        return false;
    }

    // Check if each element in the arrays is the same
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    // If all elements are the same and arrays have the same length, return true
    return true;
}
