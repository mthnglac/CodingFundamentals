export default class App {
  public static mergeSort(unsortedArray: number[]): number[] {
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }

    const middle: number = Math.floor(unsortedArray.length / 2);

    const left: number[] = unsortedArray.slice(0, middle);
    const right: number[] = unsortedArray.slice(middle);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  public static merge(left: number[], right: number[]): number[] {
    let resultArray: number[] = [],
      leftIndex = 0,
      rightIndex = 0;

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

  public static clientApp(): void {
    const sampleArray: number[] = [1, -2, 5, 0, 79, 27, 2, 48, 2, 44, 121];
    console.log(this.mergeSort(sampleArray));
  }
}

App.clientApp();
