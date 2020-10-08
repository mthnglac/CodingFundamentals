import IExpression from './IExpression';
import Context from './Context';

export default class NonTerminalExpression implements IExpression {
  private readonly lop: IExpression;
  private readonly rop: IExpression;

  constructor(left: IExpression, right: IExpression) {
    this.lop = left;
    this.rop = right;
  }

  public interpret(context: Context): boolean | undefined {
    return this.lop.interpret(context) && this.rop.interpret(context);
  }
}
