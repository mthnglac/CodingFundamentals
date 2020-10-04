import ProductA from "./ProductA";
import ProductB from "./ProductB";

export default class ConcreteProductBX implements ProductB {
  public usefulFunctionB(): string {
    return "The Result of the product BX.";
  }

  public anotherUsefulFunctionB(collaborator: ProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the BX collaborating with the (${result})`;
  }
}
