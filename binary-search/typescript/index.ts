export default class App {
  public static binarySearchIterative(arr: number[], x: number): boolean {
    let left: number = 0;
    let right: number = arr.length - 1;

    while (left <= right) {
      const mid: number = left + (left + right) / 2;
      if (arr[mid] == x) {
        return true;
      } else if (x < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return false;
  }

  public static binarySearchRecursive(
    arr: number[],
    x: number,
    left: number,
    right: number
  ): boolean {
    if (left > right) {
      return false;
    }

    const mid: number = left + (left + right) / 2;
    if (arr[mid] == x) {
      return true;
    } else if (x < arr[mid]) {
      return this.binarySearchRecursive(arr, x, left, mid - 1);
    } else {
      return this.binarySearchRecursive(arr, x, mid + 1, right);
    }
  }
}
