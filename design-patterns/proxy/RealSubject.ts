import ISubject from "./ISubject";

export default class RealSubject implements ISubject {
  public request(): void {
    console.log("RealSubject: Handling request.");
  }
}
