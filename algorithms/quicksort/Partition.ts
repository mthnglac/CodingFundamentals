import Swap from "./Swap";

export default class Partition {
  public static doYourPartition(
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
        Swap.doYourSwap(array, left, right); //swap two elements
        left++;
        right--;
      }
    }

    return left;
  }
}
