import Factory from "./Factory";
import ConcreteProductAX from "./ConcreteProductAX";
import ConcreteProductBX from "./ConcreteProductBX";
import ProductA from "./ProductA";
import ProductB from "./ProductB";

export default class ConcreteFactoryX implements Factory {
  public createProductA(): ProductA {
    return new ConcreteProductAX();
  }

  public createProductB(): ProductB {
    return new ConcreteProductBX();
  }
}
