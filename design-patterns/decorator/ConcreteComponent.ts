import IComponent from "./IComponent";

export default class ConcreteComponent implements IComponent {
  public operation(): string {
    return "ConcreteComponent";
  }
}
