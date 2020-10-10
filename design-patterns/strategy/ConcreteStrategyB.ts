import IStrategy from "./IStrategy";

export default class ConcreteObserverB implements IStrategy {
  public doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}
