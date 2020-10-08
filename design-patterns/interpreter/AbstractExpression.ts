import Context from './Context';

export default class AbstractExpression {
  public interpret(context: Context): boolean | undefined {
    return false;
  }
}
