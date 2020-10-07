import Director from "./Director";
import ConcreteBuilder from "./ConcreteBuilder";

export default class App {
  public static clientCode(director: Director) {
    const builder = new ConcreteBuilder();
    director.setBuilder(builder);

    console.log("Standard basic product:");
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log("Standard full featured product:");
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();

    console.log("Custom product:");
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
  }
}

const director = new Director();

App.clientCode(director);
