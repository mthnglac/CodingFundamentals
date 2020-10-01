export default interface IQueue<T> {
  enqueue(data: T): void;
  dequeue(): T | null;
  peek(): T | null;
  size(): number;
}
