import IComponent from './IComponent';

export default class Decorator implements IComponent {
  protected component: IComponent;

  constructor(component: IComponent) {
    this.component = component;
  }

  public operation(): string {
    return this.component.operation();
  }
}
