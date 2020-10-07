import IFactory from "./IFactory";
import ConcreteProductAX from "./ConcreteProductAX";
import ConcreteProductBX from "./ConcreteProductBX";
import IProductA from "./IProductA";
import IProductB from "./IProductB";

export default class ConcreteFactoryX implements IFactory {
  public createProductA(): IProductA {
    return new ConcreteProductAX();
  }

  public createProductB(): IProductB {
    return new ConcreteProductBX();
  }
}
