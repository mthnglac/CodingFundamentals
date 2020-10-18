export default class DepthFirstSearch {
  private adjacencyList: Map<string, string[]>;
  private visited: Set<string>;

  constructor(adjacencyList: Map<string, string[]>) {
    this.adjacencyList = adjacencyList;
    this.visited = new Set();
  }

  public search(start: string, visited?: Set<string>): void {
    console.log(start)
    this.visited.add(start);
    const destinations: string[] | undefined = this.adjacencyList.get(start);
    if (destinations) {
      for (const destination of destinations) {
        if (destination === "BKK") {
          console.log("DFS found Bangkok!!!");
        } else if (!this.visited.has(destination)) {
          this.search(destination, visited);
        }
      }
    }
  }
}
