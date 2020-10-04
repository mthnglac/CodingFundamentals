export default class Node {
  left: Node;
  right: Node;
  data: number;

  constructor(data: number) {
    this.data = data;
  }

  public insert(value: number): void {
    if (value <= this.data) {
      if (this.left === null) {
        this.left = new Node(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new Node(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  public contains(value: number): boolean {
    if (value === this.data) {
      return true;
    } else if (value < this.data) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }

  public printInOrder(): void {
    if (this.left !== null) {
      this.left.printInOrder();
    }

    console.log(this.data);

    if (this.right !== null) {
      this.right.printInOrder();
    }
  }
}
