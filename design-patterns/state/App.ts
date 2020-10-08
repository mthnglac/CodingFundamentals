import ConcreteStateA from "./ConcreteStateA";
import Context from "./Context";

export default class App {
  public static clientApp(): void {
    const context: Context = new Context(new ConcreteStateA());
    context.request1();
    context.request2();
  }
}

App.clientApp();
