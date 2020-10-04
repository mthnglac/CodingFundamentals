import DataNode from "./DataNode";
import IStack from "./IStack";

export default class Stack<T> implements IStack<T> {
  private _size: number;
  private tail: DataNode<T> | null;

  constructor() {
    this._size = 0;
    this.tail = null;
  }

  public size(): number {
    return this._size;
  }

  public push(data: T): void {
    const node: DataNode<T> = {
      data,
      next: null,
    };

    if (this.tail === null) {
      this.tail = node;
    } else {
      node.next = this.tail;
      this.tail = node;
    }

    ++this._size;
  }

  public pop(): T | null {
    if (this._size == 0) {
      return null;
    }

    const item = this.tail.data;
    this.tail = this.tail.next;
    --this._size;

    return item;
  }

  public peek(): T | null {
    if (this._size == 0) {
      return null;
    }

    return this.tail.data;
  }
}
