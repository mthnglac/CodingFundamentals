import IComponent from "./IComponent";
import ConcreteComponent from "./ConcreteComponent";
import ConcreteDecoratorA from "./ConcreteDecoratorA";
import ConcreteDecoratorB from "./ConcreteDecoratorB";

export default class App {
  public static clientCode(component: IComponent): void {
    console.log(`RESULT: ${component.operation()}`);
  }

  public static clientApp(): void {
    const simple: ConcreteComponent = new ConcreteComponent();
    console.log("Client: I've got a simple component:");
    this.clientCode(simple);

    console.log("");

    const decorator1: ConcreteDecoratorA = new ConcreteDecoratorA(simple);
    const decorator2: ConcreteDecoratorB = new ConcreteDecoratorB(decorator1);
    console.log("Client: Now I've got a decorated component:");
    this.clientCode(decorator2);
  }
}

App.clientApp();
