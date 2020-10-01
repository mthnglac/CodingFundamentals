import Product from "./Product";

export default interface Creator {
  createProductA(): Product;
  createProductB(): Product;
}
