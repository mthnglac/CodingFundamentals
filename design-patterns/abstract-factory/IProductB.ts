import IProductA from "./IProductA";

export default interface IProductB {
  usefulFunctionB(): string;
  anotherUsefulFunctionB(collaborator: IProductA): string;
}
