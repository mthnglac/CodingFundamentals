import IComponent from "./IComponent";
import IVisitor from "./IVisitor";

export default class ConcreteComponentB implements IComponent {
  public accept(visitor: IVisitor): void {
    visitor.visitConcreteComponentB(this);
  }

  public specialMethodOfConcreteComponentB(): string {
    return "B";
  }
}
