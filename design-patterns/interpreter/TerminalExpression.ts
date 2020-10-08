import AbstractExpression from './AbstractExpression';
import Context from './Context';

export default class TerminalExpression extends AbstractExpression {
  private readonly value: string;

  constructor(value: string) {
    super();
    this.value = value;
  }

  public interpret(context: Context): boolean | undefined {
    return context.getMap(this.value);
  }
}
