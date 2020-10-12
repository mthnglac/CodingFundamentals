import IImplementation from "./IImplementation";

export default class Abstraction {
  protected implementation: IImplementation;

  constructor(implementation: IImplementation) {
    this.implementation = implementation;
  }

  public operation(): string {
    const result: string = this.implementation.operationImplementation();
    return `Abstraction: Base operation with:\n${result}`;
  }
}
