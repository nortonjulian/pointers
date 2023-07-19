// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
         const ave = (arr[left] + arr[right]) / 2;

         if(ave === target) {
            return true;
         } else if (ave < target) {
            left++;
         } else {
            right--;
         }
    }

    return false;
}
