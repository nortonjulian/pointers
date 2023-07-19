// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let count = 0;

    arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;

    while (left < right ) {
        const sum = arr[left] + arr[right];

        if (sum === target) {
            count++;
            left++;
            right--;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return count;
}
