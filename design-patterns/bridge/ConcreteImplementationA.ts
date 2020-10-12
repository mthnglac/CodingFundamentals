import IImplementation from "./IImplementation";

export default class ConcreteImplementationA implements IImplementation {
  public operationImplementation(): string {
    return "ConcreteImplementationA: Here's the result on the platform A.";
  }
}
