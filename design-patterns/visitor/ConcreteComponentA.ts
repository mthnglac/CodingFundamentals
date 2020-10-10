import IComponent from "./IComponent";
import IVisitor from "./IVisitor";

export default class ConcreteComponentA implements IComponent {
  public accept(visitor: IVisitor): void {
    visitor.visitConcreteComponentA(this);
  }

  public exclusiveMethodOfConcreteComponentA(): string {
    return "A";
  }
}
