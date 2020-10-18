export default class BreadthFirstSearch {
  private adjacencyList: Map<string, string[]>;
  private visited: Set<string>;
  private queue: string[];

  constructor(adjacencyList: Map<string, string[]>) {
    this.visited = new Set();
    this.adjacencyList = adjacencyList;
    this.queue = [];
  }

  public search(start: string): void {
    this.queue = [start];

    while (this.queue.length > 0) {
      const airport: string | undefined = this.queue.shift();
      if (airport) {
        const destinations: string[] | undefined = this.adjacencyList.get(
          airport
        );
        if (destinations) {
          for (const destination of destinations) {
            if (destination === "BKK") {
              console.log("BFS found Bangkok!!!");
            } else if (!this.visited.has(destination)) {
              this.visited.add(destination);
              this.queue.push(destination);
              console.log(destination);
            }
          }
        } else {
          break;
        }
      } else {
        break;
      }
    }
  }
}
