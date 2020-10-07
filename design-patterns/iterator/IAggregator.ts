import IIterator from "./IIterator";

export default interface IAggregator {
  getIterator(): IIterator<string>;
}
