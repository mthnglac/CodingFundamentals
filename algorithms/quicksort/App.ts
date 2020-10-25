import QuickSort from './QuickSort';

export default class App {
  public static clientApp(): void {
    const array: number[] = [5, 3, 7, 6, 2, 9];
    const result: number[] = QuickSort.doYourSorting(array, 0, array.length - 1);
    console.log(result);
  }
}

App.clientApp();
