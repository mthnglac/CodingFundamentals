import AbstractClass from "./AbstractClass";
import ConcreteClass1 from "./ConcreteClass1";
import ConcreteClass2 from "./ConcreteClass2";

export default class App {
  public static clientCode(abstractClass: AbstractClass): void {
    abstractClass.templateMethod();
  }

  public static clientApp(): void {
    console.log("Same client code can work with different subclasses");
    this.clientCode(new ConcreteClass1());

    console.log("");

    console.log("Same client code can work with different subclasses");
    this.clientCode(new ConcreteClass2());
  }
}

App.clientApp();
