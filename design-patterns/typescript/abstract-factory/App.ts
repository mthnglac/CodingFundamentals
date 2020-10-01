import Factory from "./Factory";
import ConcreteFactoryX from "./ConcreteFactoryX";
import ConcreteFactoryY from "./ConcreteFactoryY";

export default class App {
  public clientCode(factory: Factory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
  }
}

const z: App = new App();
console.log("Client: Testing client code with the first factory type...");
z.clientCode(new ConcreteFactoryX());

console.log("");

console.log(
  "Client: Testing the same client code with the second factory type..."
);
z.clientCode(new ConcreteFactoryY());
