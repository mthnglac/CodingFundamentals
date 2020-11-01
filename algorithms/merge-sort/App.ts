export default class App {
  public static mergeSort(array: number[]): void {
    mergeSort(array, new Array<number>(array.length), 0, array.length - 1);
  }

  public static mergeSort(
    array: number[],
    temp: number[],
    leftStart: number,
    rightEnd: number
  ): void {
    if (leftStart >= rightEnd) {
      return;
    }
    const middle: number = (leftStart + rightEnd) / 2;
    mergeSort(array, temp, leftStart, middle);
    mergeSort(array, temp, middle + 1, rightEnd);
    mergeHalves(array, temp, leftStart, rightEnd);
  }

  public static mergeHalves(
    array: number[],
    temp: number[],
    leftStart: number,
    rightEnd: number
  ): void {
    const leftEnd: number = (rightEnd + leftStart) / 2;
    const rightStart: number = leftEnd + 1;
    const size: number = rightEnd - leftStart + 1;

    let left: number = leftStart;
    let right: number = rightStart;
    let index: number = leftStart;

    while (left < leftEnd && right <= rightEnd) {
      if (array[left] <= array[right]) {
        temp[index] = array[left];
        left++;
      } else {
        temp[index] = array[right];
        right++;
      }
      index++;
    }


  }

  public static clientApp(): void {}
}
