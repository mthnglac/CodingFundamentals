export default class Swap {
  public static doYourSwap(
    array: number[],
    left: number,
    right: number
  ): void {
    [array[left], array[right]] = [array[right], array[left]];
  }
}
