export default interface DataNode<T> {
  data: T;
  next: DataNode<T> | null;
}
