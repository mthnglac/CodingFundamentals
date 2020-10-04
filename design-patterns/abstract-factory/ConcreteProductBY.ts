import ProductA from "./ProductA";
import ProductB from "./ProductB";

export default class ConcreteProductBY implements ProductB {
  public usefulFunctionB(): string {
    return "The result of the product BY.";
  }

  public anotherUsefulFunctionB(collaborator: ProductA) {
    const result = collaborator.usefulFunctionA();
    return `The result of the BY collaborating with the (${result})`;
  }
}
