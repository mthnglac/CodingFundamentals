import IProduct from "./IProduct";

export default interface ICreator {
  createProductA(): IProduct;
  createProductB(): IProduct;
}
