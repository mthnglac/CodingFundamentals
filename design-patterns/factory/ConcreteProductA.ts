import Product from "./Product";

export default class ConcreteProductA implements Product {
  public getName(): string {
    return "type A";
  }
}
