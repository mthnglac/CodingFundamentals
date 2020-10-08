import AbstractExpression from './AbstractExpression';
import Context from './Context';

export default class NonTerminalExpression extends AbstractExpression {
  private readonly lop: AbstractExpression;
  private readonly rop: AbstractExpression;

  constructor(left: AbstractExpression, right: AbstractExpression) {
    super();
    this.lop = left;
    this.rop = right;
  }

  public interpret(context: Context): boolean | undefined {
    return this.lop.interpret(context) && this.rop.interpret(context);
  }
}
