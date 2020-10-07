import IProductA from "./IProductA";

export default class ConcreteProductAX implements IProductA {
  public usefulFunctionA(): string {
    return "The result of the product AX.";
  }
}
