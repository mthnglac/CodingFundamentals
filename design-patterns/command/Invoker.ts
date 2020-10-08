import ICommand from "./ICommand";

export default class Invoker {
  private onStart: ICommand;
  private onFinish: ICommand;

  public setOnStart(command: ICommand): void {
    this.onStart = command;
  }

  public setOnFinish(command: ICommand): void {
    this.onFinish = command;
  }

  public doSomethingImportant(): void {
    console.log("Invoker: Does anybody want something done before I begin?");
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log("Invoker: ...doing something really important...");

    console.log("Invoker: Does anybody want something done after I finish?");
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  private isCommand(object): object is ICommand {
    return object.execute !== undefined;
  }
}
