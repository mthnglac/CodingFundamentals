import Component from './Component';

export default class Composite extends Component {
  protected children: Component[] = [];

  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component): void {
    const componentIndex: number = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);
  }

  public isComposite(): boolean {
    return true;
  }

  public operation(): string {
    const results: string[] = [];
    for (const child of this.children) {
      results.push(child.operation());
    }

    return `Branch(${results.join("+")})`;
  }
}
