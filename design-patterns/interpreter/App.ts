import AbstractExpression from './AbstractExpression';
import TerminalExpression from './TerminalExpression';
import NonTerminalExpression from './NonTerminalExpression';
import Context from './Context';

export default class App {
  public static clientApp(): void {
    const A: AbstractExpression = new TerminalExpression("A");
    const B: AbstractExpression = new TerminalExpression("B");
    const exp: AbstractExpression = new NonTerminalExpression(A, B);

    const context: Context = new Context();
    context.setMap("A", true);
    context.setMap("B", false);

    console.log(`${context.getMap("A")} + " AND " + ${context.getMap("B")}`);
    console.log(` = ${exp.interpret(context)}`);
  }
}

App.clientApp();
