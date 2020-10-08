import ICreator from "./ICreator";
import IProduct from "./IProduct";
import ConcreteCreator from "./ConcreteCreator";

export default class App {
  public static clientCode() {
    const creator: ICreator = new ConcreteCreator();

    const p1: IProduct = creator.createProductA();
    console.log(p1.getName());
    const p2: IProduct = creator.createProductB();
    console.log(p2.getName());
  }
}

App.clientCode();
