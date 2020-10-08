import IExpression from './IExpression';
import TerminalExpression from './TerminalExpression';
import NonTerminalExpression from './NonTerminalExpression';
import Context from './Context';

export default class App {
  public static clientApp(): void {
    const A: IExpression = new TerminalExpression("A");
    const B: IExpression = new TerminalExpression("B");
    const exp: IExpression = new NonTerminalExpression(A, B);

    const context: Context = new Context();
    context.setMap("A", true);
    context.setMap("B", false);

    console.log(`${context.getMap("A")} AND ${context.getMap("B")} = ${exp.interpret(context)}`);
  }
}

App.clientApp();
