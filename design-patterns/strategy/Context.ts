import IStrategy from "./IStrategy";

export default class Context {
  private strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: IStrategy) {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): void {
    console.log(
      "Context: Sorting data using the strategy (not sure how it'll do it)"
    );
    const result: string[] = this.strategy.doAlgorithm([
      "a",
      "b",
      "c",
      "d",
      "e",
    ]);
    console.log(result.join(","));
  }
}
