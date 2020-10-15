import ISubject from "./ISubject";
import RealSubject from "./RealSubject";
import Proxy from "./Proxy";

export default class App {
  public static clientCode(subject: ISubject): void {
    subject.request();
  }

  public static clientApp(): void {
    const realSubject: RealSubject = new RealSubject();
    this.clientCode(realSubject);

    console.log("");

    console.log("Client: Executing the same client code with a proxy:");
    const proxy: Proxy = new Proxy(realSubject);
    this.clientCode(proxy);
  }
}

App.clientApp();
