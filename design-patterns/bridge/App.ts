import Abstraction from "./Abstraction";
import ConcreteImplementationA from "./ConcreteImplementationA";
import ConcreteImplementationB from "./ConcreteImplementationB";
import ExtendedAbstaction from "./ExtendedAbstaction";

export default class App {
  public static clientCode(abstraction: Abstraction): void {
    console.log(abstraction.operation());
  }

  public static clientApp(): void {
    let implementation: ConcreteImplementationA = new ConcreteImplementationA();
    let abstraction: Abstraction = new Abstraction(implementation);
    this.clientCode(abstraction);

    console.log('');

    implementation = new ConcreteImplementationB();
    abstraction = new ExtendedAbstaction(implementation);
    this.clientCode(abstraction);
  }
}

App.clientApp();
