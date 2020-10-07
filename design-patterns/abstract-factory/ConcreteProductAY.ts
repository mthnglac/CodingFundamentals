import IProductA from "./IProductA";

export default class ConcreteProductAY implements IProductA {
  public usefulFunctionA(): string {
    return "The result of the product AY.";
  }
}
