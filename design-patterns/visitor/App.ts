import ConcreteVisitor1 from "./ConcreteVisitor1";
import ConcreteVisitor2 from "./ConcreteVisitor2";
import ConcreteComponentA from "./ConcreteComponentA";
import ConcreteComponentB from "./ConcreteComponentB";
import IComponent from "./IComponent";
import IVisitor from "./IVisitor";

export default class App {
  public static clientCode(components: IComponent[], visitor: IVisitor): void {
    for (const component of components) {
      component.accept(visitor);
    }
  }

  public static clientApp(): void {
    const components: IComponent[] = [
      new ConcreteComponentA(),
      new ConcreteComponentB(),
    ];

    console.log(
      "The client code works with all visitors via the base Visitor interface:"
    );
    const visitor1: IVisitor = new ConcreteVisitor1();
    this.clientCode(components, visitor1);

    console.log("");

    console.log(
      "It allows the same client code to work with different types of visitors:"
    );
    const visitor2: IVisitor = new ConcreteVisitor2();
    this.clientCode(components, visitor2);
  }
}

App.clientApp();
