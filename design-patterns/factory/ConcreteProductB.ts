import IProduct from "./IProduct";

export default class ConcreteProductB implements IProduct {
  public getName(): string {
    return "type B";
  }
}
