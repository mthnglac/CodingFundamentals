import Product from "./Product";

export default class ConcreteProductB implements Product {
  public getName(): string {
    return "type B";
  }
}
