export default interface IHandler {
  setNext(handler: IHandler): IHandler;
  handle(request: string): string;
}
