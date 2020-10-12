import IImplementation from "./IImplementation";

export default class ConcreteImplementationB implements IImplementation {
  public operationImplementation(): string {
    return "ConcreteImplementationB: Here's the result on the platform B.";
  }
}
