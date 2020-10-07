import IFactory from "./IFactory";
import ConcreteProductAY from "./ConcreteProductAY";
import ConcreteProductBY from "./ConcreteProductBY";
import IProductA from "./IProductA";
import IProductB from "./IProductB";

export default class ConcreteFactoryY implements IFactory {
  public createProductA(): IProductA {
    return new ConcreteProductAY();
  }

  public createProductB(): IProductB {
    return new ConcreteProductBY();
  }
}
