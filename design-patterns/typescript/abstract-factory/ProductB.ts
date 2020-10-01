import ProductA from "./ProductA";

export default interface ProductB {
  usefulFunctionB(): string;
  anotherUsefulFunctionB(collaborator: ProductA): string;
}
