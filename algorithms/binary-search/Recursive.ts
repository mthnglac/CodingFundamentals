export default class Recursive {
  public static binarySearch(
    arr: number[],
    x: number,
    left: number,
    right: number
  ): number {
    if (left > right) {
      return -1;
    }

    const mid: number = left + Math.floor((right - left) / 2);
    if (arr[mid] === x) {
      return mid;
    } else if (x < arr[mid]) {
      return this.binarySearch(arr, x, left, mid - 1);
    } else {
      return this.binarySearch(arr, x, mid + 1, right);
    }
  }
}
