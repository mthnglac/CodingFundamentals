export default class Merge {
  public static doYourMerge(left: number[], right: number[]): number[] {
    let resultArray: number[] = [];
    let leftIndex: number = 0;
    let rightIndex: number = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
  }
}
