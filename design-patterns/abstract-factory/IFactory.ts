import IProductA from "./IProductA";
import IProductB from "./IProductB";

export default interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
}
