export default interface IIterator<T> {
  current(): T;
  next(): T;
  key(): number;
  valid(): boolean;
  rewind(): void;
}
