export default class BreadthFirstSearch {
  private adjacencyList: Map<string, string>;
  private visited: Set<string>;
  private queue: string[];

  constructor() {
    this.visited = new Set();
    this.adjacencyList = new Map();
    this.queue = [];
  }

  public search(start: string): void {
    this.queue = [start];

    while (this.queue.length > 0) {
      const airport: string | undefined = this.queue.shift();
      if (airport) {
        const destinations: string | undefined = this.adjacencyList.get(airport);
        if (destinations) {
          for (const destination of destinations) {
            this.queue.push(destination);
            if (destination === "BKK") {
              console.log("found it!");
            } else if (!this.visited.has(destination)) {
              this.visited.add(destination);
              this.queue.push(destination);
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

const z: BreadthFirstSearch = new BreadthFirstSearch();
z.search("PHX");
