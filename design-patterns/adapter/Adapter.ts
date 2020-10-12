import Adaptee from "./Adaptee";
import Target from "./Target";

export default class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result: string = this.adaptee
      .spesificRequest()
      .split("")
      .reverse()
      .join("");
    return `Adapter: (TRANSLATED) ${result}`;
  }
}
