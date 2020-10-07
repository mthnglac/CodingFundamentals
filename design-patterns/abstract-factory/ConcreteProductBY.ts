import IProductA from "./IProductA";
import IProductB from "./IProductB";

export default class ConcreteProductBY implements IProductB {
  public usefulFunctionB(): string {
    return "The result of the product BY.";
  }

  public anotherUsefulFunctionB(collaborator: IProductA) {
    const result = collaborator.usefulFunctionA();
    return `The result of the BY collaborating with the (${result})`;
  }
}
