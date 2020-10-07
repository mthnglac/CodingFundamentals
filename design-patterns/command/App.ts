import Invoker from "./Invoker";
import Receiver from "./Receiver";
import SimpleCommand from "./SimpleCommand";
import ComplexCommand from "./ComplexCommand";

export default class App {
  public static clientCode() {
    const invoker = new Invoker();
    invoker.setOnStart(new SimpleCommand("Say Hi!"));

    const receiver = new Receiver();
    invoker.setOnFinish(
      new ComplexCommand(receiver, "Send email", "Save report")
    );

    invoker.doSomethingImportant();
  }
}

App.clientCode();
