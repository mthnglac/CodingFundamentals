import IExpression from './IExpression';
import Context from './Context';

export default class TerminalExpression implements IExpression {
  private readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  public interpret(context: Context): boolean | undefined {
    return context.getMap(this.value);
  }
}
