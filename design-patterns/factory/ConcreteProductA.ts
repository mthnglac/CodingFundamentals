import IProduct from "./IProduct";

export default class ConcreteProductA implements IProduct {
  public getName(): string {
    return "type A";
  }
}
