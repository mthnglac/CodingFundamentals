import IMemento from './IMemento';

export default class ConcreteMemento implements IMemento {
  private state: string;
  private date: string;

  constructor(state: string) {
    this.state = state;
    this.state = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  public getState(): string {
    return this.state;
  }

  public getName(): string {
    return `${this.date} / (${this.state.substr(0, 9)}...)`
  }

  public getDate(): string {
    return this.date;
  }
}
