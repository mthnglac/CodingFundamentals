import Creator from "./Creator";
import Product from "./Product";
import ConcreteProductA from "./ConcreteProductA";
import ConcreteProductB from "./ConcreteProductB";

export default class ConcreteCreator implements Creator {
  public createProductA(): Product {
    return new ConcreteProductA();
  }

  public createProductB(): Product {
    return new ConcreteProductB();
  }
}
