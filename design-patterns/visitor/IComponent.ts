import Visitor from "./Visitor";

export default interface IComponent {
  accept(visitor: Visitor): void;
}
