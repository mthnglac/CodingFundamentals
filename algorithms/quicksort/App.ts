export default class App {
  public static swap(array: number[], left: number, right: number): void {
    [array[left], array[right]] = [array[right], array[left]];
  }

  public static quicksort(
    array: number[],
    left: number,
    right: number
  ): number[] {
    if (array.length > 1) {
      const index: number = this.partition(array, left, right); // index returned from partition

      if (left < index - 1) { // more elements on the left side of the pivot
        this.quicksort(array, left, index - 1);
      }

      if (index < right) { // more elements on the right side of the pivot
        this.quicksort(array, index, right);
      }
    }

    return array;
  }

  public static partition(
    array: number[],
    left: number,
    right: number
  ): number {
    const pivot: number = array[Math.floor((right + left) / 2)]; // middle element

    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }

      while (array[right] > pivot) {
        right--;
      }

      if (left <= right) {
        this.swap(array, left, right); //swap two elements
        left++;
        right--;
      }
    }

    return left;
  }

  public static clientApp(): void {
    const array: number[] = [5, 3, 7, 6, 2, 9];
    const result: number[] = this.quicksort(array, 0, array.length - 1);
    console.log(result);
  }
}

App.clientApp();
