export default class Iterative {
  public static binarySearch(arr: number[], x: number): number {
    let left: number = 0;
    let right: number = arr.length - 1;

    while (left <= right) {
      const mid: number = left + Math.floor((right - left) / 2);
      if (arr[mid] === x) {
        return mid;
      } else if (x < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return -1;
  }
}
