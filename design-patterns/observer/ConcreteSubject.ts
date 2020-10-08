import ISubject from "./ISubject";
import IObserver from "./IObserver";

export default class ConcreteSubject implements ISubject {
  private observers: IObserver[];

  public state: number;

  constructor() {
    this.state = 0;
    this.observers = [];
  }

  public attach(observer: IObserver): void {
    const isExists: boolean = this.observers.includes(observer);
    if (isExists) {
      console.log("Subject: Observer has been attached already.");
    }

    console.log("Subject: Attached an observer.");
    this.observers.push(observer);
  }

  public detach(observer: IObserver): void {
    const observerIndex: number = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      console.log("Subject: NoneExistent observer.");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Subject: Detached an observer.");
  }

  public notify(): void {
    console.log("Subject: Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public someBusinessLogic(): void {
    console.log("\nSubject: I'm doing something important.");
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log(`Subject: My state has just changed to: ${this.state}`);
    this.notify();
  }
}
