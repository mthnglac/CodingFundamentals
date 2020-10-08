import IObserver from "./IObserver";
import ISubject from "./ISubject";
import ConcreteSubject from "./ConcreteSubject";

export default class ConcreteObserverB implements IObserver {
  public update(subject: ISubject): void {
    if (
      subject instanceof ConcreteSubject &&
      (subject.state === 0 || subject.state >= 2)
    ) {
      console.log("ConcreteObserverB: Reacted to the event.");
    }
  }
}
