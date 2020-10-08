import IBuilder from "./IBuilder";
import Product from "./Product";

export default class ConcreteBuilder implements IBuilder {
  private product: Product;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }

  public producePartA(): void {
    this.product.parts.push("PartA1");
  }

  public producePartB(): void {
    this.product.parts.push("PartB1");
  }

  public producePartC(): void {
    this.product.parts.push("PartC1");
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}
