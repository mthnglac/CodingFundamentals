import Creator from "./Creator";
import Product from "./Product";
import ConcreteCreator from "./ConcreteCreator";

export default class App {
  public static clientCode() {
    const creator: Creator = new ConcreteCreator();

    const p1: Product = creator.createProductA();
    console.log(p1.getName());
    const p2: Product = creator.createProductB();
    console.log(p2.getName());
  }
}

App.clientCode();
