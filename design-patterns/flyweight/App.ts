import FlyweightFactory from "./FlyweightFactory";
import Flyweight from "./Flyweight";

export default class App {
  public static addCarToPoliceDatabase(
    ff: FlyweightFactory,
    plates: string,
    owner: string,
    brand: string,
    model: string,
    color: string
  ): void {
    console.log("\nClient: Adding a car to database.");
    const flyweigt: Flyweight = ff.getFlyweight([brand, model, color]);
    flyweigt.operation([plates, owner]);
  }

  public static clientApp(): void {
    const factory: FlyweightFactory = new FlyweightFactory([
      ["Chevrolet", "Camaro2018", "pink"],
      ["Mercedes Benz", "C300", "black"],
      ["Mercedes Benz", "C500", "red"],
      ["BMW", "M5", "red"],
      ["BMW", "X6", "white"],
    ]);
    factory.listFlyweights();

    this.addCarToPoliceDatabase(factory, "CL234IR", "James Doe", "BMW", "M5", "red");
    this.addCarToPoliceDatabase(factory, "CL234IR", "James Doe", "BMW", "X1", "red");
    factory.listFlyweights();
  }
}

App.clientApp();
