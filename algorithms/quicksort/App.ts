export default class App {
  public static swap(array, left, right): void {
    [array[left], array[right]] = [array[right], array[left]];
  }

  public static quicksort(array: number[]): void {
    this.quicksort(array, 0, array.length - 1);
  }

  public static quicksort(array: number[], left: number, right: number): void {
    if (left >= right) {
      return;
    }

    const pivot: number = array[(left + right) / 2];
    const index: number = this.partition(array, left, right, pivot);
    this.quicksort(array, left, index - 1);
    this.quicksort(array, index, right);
  }

  public static partition(
    array: number[],
    left: number,
    right: number,
    pivot: number
  ): number {
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }

      while (array[right] > pivot) {
        right--;
      }

      if (left <= right) {
        this.swap(array, left, right);
        left++;
        right--;
      }
    }

    return left;
  }
}
