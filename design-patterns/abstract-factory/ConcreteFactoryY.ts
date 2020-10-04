import Factory from "./Factory";
import ConcreteProductAY from "./ConcreteProductAY";
import ConcreteProductBY from "./ConcreteProductBY";
import ProductA from "./ProductA";
import ProductB from "./ProductB";

export default class ConcreteFactoryY implements Factory {
  public createProductA(): ProductA {
    return new ConcreteProductAY();
  }

  public createProductB(): ProductB {
    return new ConcreteProductBY();
  }
}
