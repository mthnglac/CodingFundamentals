import DataNode from './DataNode';
import IQueue from './IQueue';

export default class Queue<T> implements IQueue<T> {
  private _size: number;
  private head: DataNode<T> | null;
  private tail: DataNode<T> | null;

  constructor() {
    this._size = 0;
    this.head = this.tail = null;
  }

  public size(): number {
    return this._size;
  }

  public enqueue(data: T): void {
    const node: DataNode<T> = {
      data,
      next: null,
    };

    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }

    ++this._size;
  }

  public dequeue(): T | null {
    if (this._size == 0) {
      return null;
    }

    const item = this.head.data;
    this.head = this.head.next;
    --this._size;

    if (!this._size) {
      this.tail = null;
    }

    return item;
  }

  public peek(): T | null {
    if (this._size == 0) {
      return null;
    }

    return this.head.data;
  }
}
