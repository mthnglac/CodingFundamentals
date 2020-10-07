import WordsCollection from "./WordsCollection";

export default class App {
  public static clientCode() {
    const collection = new WordsCollection();
    collection.addItem("First");
    collection.addItem("Secind");
    collection.addItem("Third");

    const iterator = collection.getIterator();

    console.log("Straight traversal:");
    while (iterator.valid()) {
      console.log(iterator.next());
    }

    console.log("");
    console.log("Reverse traversal:");
    const reverseIterator = collection.getReverseIterator();
    while (reverseIterator.valid()) {
      console.log(reverseIterator.next());
    }
  }
}

App.clientCode();
