import Singleton from "./Singleton";

export default class App {
  public clientCode() {
    const s1 = Singleton.Instance;
    const s2 = Singleton.Instance;

    if (s1 === s2) {
      console.log("Both instances are equal to each other.");
    } else {
      console.log("Instances are not equal!!");
    }
  }
}

const z: App = new App();
z.clientCode();
