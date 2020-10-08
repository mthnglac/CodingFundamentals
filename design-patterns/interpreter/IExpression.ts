import Context from './Context';

export default interface IExpression {
  interpret(context: Context): boolean | undefined;
}
