import IHandler from "./IHandler";

export default abstract class AbstractHandler implements IHandler {
  private nextHandler: IHandler;

  public setNext(handler: IHandler): IHandler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}
