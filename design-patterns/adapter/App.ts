import Target from "./Target";
import Adaptee from "./Adaptee";
import Adapter from "./Adapter";

export default class App {
  public static clientCode(target: Target): void {
    console.log(target.request());
  }

  public static clientApp(): void {
    console.log("Client: I can work just fine with the Target objects:");
    const target: Target = new Target();
    this.clientCode(target);

    console.log("");

    const adaptee: Adaptee = new Adaptee();
    console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
    console.log(`Adaptee: ${adaptee.spesificRequest()}`);

    console.log("");

    console.log("Client: But I can work with it vie the Adapter:");
    const adapter: Adapter = new Adapter(adaptee);
    this.clientCode(adapter);
  }
}

App.clientApp();
