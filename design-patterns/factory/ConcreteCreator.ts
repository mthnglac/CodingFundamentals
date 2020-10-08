import ICreator from "./ICreator";
import IProduct from "./IProduct";
import ConcreteProductA from "./ConcreteProductA";
import ConcreteProductB from "./ConcreteProductB";

export default class ConcreteCreator implements ICreator {
  public createProductA(): IProduct {
    return new ConcreteProductA();
  }

  public createProductB(): IProduct {
    return new ConcreteProductB();
  }
}
