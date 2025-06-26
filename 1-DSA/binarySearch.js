function binarySearch(arr, target) {
    // Search already sorted array for the target value
    arr.sort((a, b) => a - b); // Ensure the array is sorted
    if (arr.length === 0) return -1; // Handle empty array case

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Example usage:
const arr = [5, 3, 8, 1, 4];
const target = 4;
const result = binarySearch(arr, target);
console.log(`Index of ${target}:`, result);