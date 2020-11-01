import Merge from "./Merge";

export default class MergeSort {
  public static doYourSorting(unsortedArray: number[]): number[] {
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }

    const middle: number = Math.floor(unsortedArray.length / 2);

    const left: number[] = unsortedArray.slice(0, middle);
    const right: number[] = unsortedArray.slice(middle);

    return Merge.doYourMerge(
      this.doYourSorting(left),
      this.doYourSorting(right)
    );
  }
}
