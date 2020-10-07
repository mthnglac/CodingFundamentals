import BaseComponent from "./BaseComponent";

export default class Component1 extends BaseComponent {
  public doA(): void {
    console.log("Component1 does A.");
    this.mediator.notify(this, "A");
  }

  public doB(): void {
    console.log("Component1 does B.");
    this.mediator.notify(this, "B");
  }
}
