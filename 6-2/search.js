const arr = [1,2,3];

const missingInteger = (arr, target) => {
    if(arr.length < 0) {
        return -1;
    }

    let mid = Math.floor(arr.length / 2);

    if(arr[mid] === target) {
        return mid;
    }

    if(arr[mid] < target) {
        return missingInteger()
    }
}