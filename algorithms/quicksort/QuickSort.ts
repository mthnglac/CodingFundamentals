import Partition from "./Partition";

export default class QuickSort {
  public static doYourSorting(
    array: number[],
    left: number,
    right: number
  ): number[] {
    if (array.length > 1) {
      const index: number = Partition.doYourPartition(array, left, right); // index returned from partition

      if (left < index - 1) { // more elements on the left side of the pivot
        this.doYourSorting(array, left, index - 1);
      }

      if (index < right) { // more elements on the right side of the pivot
        this.doYourSorting(array, index, right);
      }
    }

    return array;
  }
}
