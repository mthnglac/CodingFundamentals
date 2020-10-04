import Handler from "./Handler";
import MonkeyHandler from "./MonkeyHandler";
import SquirrelHandler from "./SquirrelHandler";
import DogHandler from "./DogHandler";

export default class App {
  public clientCode(handler: Handler) {
    const foods = ["Nut", "Banana", "Cup of coffee"];

    for (const food of foods) {
      console.log(`Client: Who wants a ${food}?`);

      const result = handler.handle(food);
      if (result) {
        console.log(`   ${result}`);
      } else {
        console.log(`   ${food} was left untouched.`);
      }
    }
  }
}

const z: App = new App();

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

console.log("Chain: Monkey > Squirrel > Dog\n");
z.clientCode(monkey);
console.log("");

console.log("SubchainL Squirrel > Dog\n");
z.clientCode(squirrel);
