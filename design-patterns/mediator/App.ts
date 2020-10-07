import ConcreteMediator from './ConcreteMediator';
import Component1 from './Component1';
import Component2 from './Component2';

export default class App {
  public clientApp(): void {
    const c1: Component1 = new Component1();
    const c2: Component2 = new Component2();
    const mediator: ConcreteMediator = new ConcreteMediator(c1, c2);

    console.log("Client triggers operation A.");
    c1.doA();

    console.log("");

    console.log("Client triggers operation D.");
    c2.doD();
  }
}

const z: App = new App();
z.clientApp();

