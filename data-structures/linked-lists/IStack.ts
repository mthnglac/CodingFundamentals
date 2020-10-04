export default interface IStack<T> {
  push(data: T): void;
  pop(): T | null;
  peek(): T | null;
  size(): number;
}
