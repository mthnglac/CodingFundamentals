import MergeSort from "./MergeSort";

export default class App {
  public static clientApp(): void {
    const sampleArray: number[] = [1, -2, 5, 0, 79, 27, 2, 48, 2, 44, 121];
    console.log(MergeSort.doYourSorting(sampleArray));
  }
}

App.clientApp();
