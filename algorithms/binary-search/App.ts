import Recursive from "./Recursive";
import Iterative from "./Iterative";

export default class App {
  private magicList: number[];
  private magicNumber: number;

  constructor() {
    this.magicList = [10, 20, 30, 40, 51, 62, 64, 79, 80, 90, 99];
    this.magicNumber = 51;
  }

  public clientApp(): void {
    console.log("Recursive binary search testing....");
    console.log(`Find ${this.magicNumber} in ${this.magicList}`);
    console.log(
      Recursive.binarySearch(
        this.magicList,
        this.magicNumber,
        0,
        this.magicList.length - 1
      )
    );

    console.log("");

    console.log("Iterative binary search testing....");
    console.log(`Find ${this.magicNumber} in ${this.magicList}`);
    console.log(Iterative.binarySearch(this.magicList, this.magicNumber));
  }
}

const z: App = new App();
z.clientApp();
