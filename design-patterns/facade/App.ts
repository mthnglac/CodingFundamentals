import Facade from "./Facade";
import Subsystem1 from "./Subsystem1";
import Subsystem2 from "./Subsystem2";

export default class App {
  public static clientCode(facade: Facade): void {
    console.log(facade.operation());
  }

  public static clientApp(): void {
    const subsystem1: Subsystem1 = new Subsystem1();
    const subsystem2: Subsystem2 = new Subsystem2();
    const facade: Facade = new Facade(subsystem1, subsystem2);
    this.clientCode(facade);
  }
}

App.clientApp();
