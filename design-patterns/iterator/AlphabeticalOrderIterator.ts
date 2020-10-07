import IIterator from "./IIterator";
import WordsCollection from "./WordsCollection";

export default class AlphabeticalOrderIterator implements IIterator<string> {
  private collection: WordsCollection;
  private position: number;
  private reverse: boolean;

  constructor(collection: WordsCollection, reverse: boolean = false) {
    this.collection = collection;
    this.position = 0;
    this.reverse = reverse;

    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }

  public rewind() {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0;
  }

  public current(): string {
    return this.collection.getItems()[this.position];
  }

  public key(): number {
    return this.position;
  }

  public next(): string {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  public valid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.getCount();
  }
}
