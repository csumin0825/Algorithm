const INPUT = [1, 10, 20, 47, 59, 63, 75, 88, 99];
const TARGET = 20;

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (target < arr[middle]) {
      high = middle - 1;
    } else if (target > arr[middle]) {
      low = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(INPUT, TARGET));
