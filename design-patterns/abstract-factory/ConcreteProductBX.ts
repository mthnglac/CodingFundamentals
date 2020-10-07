import IProductA from "./IProductA";
import IProductB from "./IProductB";

export default class ConcreteProductBX implements IProductB {
  public usefulFunctionB(): string {
    return "The Result of the product BX.";
  }

  public anotherUsefulFunctionB(collaborator: IProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the BX collaborating with the (${result})`;
  }
}
