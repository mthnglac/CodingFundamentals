import Context from './Context';
import ConcreteStrategyA from './ConcreteStrategyA';
import ConcreteStrategyB from './ConcreteStrategyB';

export default class App {
  public static clientCode(): void {
    const context: Context = new Context(new ConcreteStrategyA());
    console.log('Client: Strategy is set to normal sorting.');
    context.doSomeBusinessLogic();

    console.log('');

    console.log('Client: Strategy is set to reverse sorting.');
    context.setStrategy(new ConcreteStrategyB());
    context.doSomeBusinessLogic();
  }
}

App.clientCode();
