import Abstraction from './Abstraction';

export default class ExtendedAbstaction extends Abstraction {
  public operation(): string {
    const result: string = this.implementation.operationImplementation();
    return `ExtendedAbstraction: Extended operation with: \n${result}`;
  }
}
