export default interface IDoublyLinked<T> {
  enqueue(data: T): void; // O(1)
  dequeue(): T | null; // O(1)
  push(data: T): void; // O(1)
  pop(): T | null; // O(1)
  getAt(index: number): T; // O(n)
  insertAt(index: number, data: T): void; // O(n)
  removeAt(index: number): T; // O(n)
  size(): number;
}

