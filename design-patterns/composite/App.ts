import Component from './Component';
import Leaf from './Leaf';
import Composite from './Composite';

export default class App {
  public static clientCode(component: Component): void {
    console.log(`RESULT: ${component.operation()}`);
  }

  public static clientCode2(component1: Component, component2: Component): void {
    if (component1.isComposite()) {
      component1.add(component2);
    }
    console.log(`RESULT: ${component1.operation()}`);
  }

  public static clientApp(): void {
    const simple: Leaf = new Leaf();
    console.log('Client: I\'ve got a simple component:');
    this.clientCode(simple);
    console.log('');

    const tree: Composite = new Composite();
    const branch1: Composite = new Composite();
    branch1.add(new Leaf());
    branch1.add(new Leaf());

    const branch2: Composite = new Composite();
    branch2.add(new Leaf());

    tree.add(branch1);
    tree.add(branch2);
    console.log('Client: Now I\'ve got a composite tree:')
    this.clientCode(tree);
    console.log("");

    console.log('Client: I don\'t need to check the components classes even when managing the tree:');
    this.clientCode2(tree, simple);
  }
}

App.clientApp();
