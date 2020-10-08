import ConcreteSubject from './ConcreteSubject';
import ConcreteObserverA from './ConcreteObserverA';
import ConcreteObserverB from './ConcreteObserverB';

export default class App {
  public static clientApp(): void {
    const subject: ConcreteSubject = new ConcreteSubject();

    const observer1: ConcreteObserverA = new ConcreteObserverA();
    subject.attach(observer1);

    const observer2: ConcreteObserverB = new ConcreteObserverB();
    subject.attach(observer2);

    subject.someBusinessLogic();
    subject.someBusinessLogic();

    subject.detach(observer2);

    subject.someBusinessLogic();
  }
}

App.clientApp();
