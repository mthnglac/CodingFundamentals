import ProductA from "./ProductA";
import ProductB from "./ProductB";

export default interface Factory {
  createProductA(): ProductA;
  createProductB(): ProductB;
}
