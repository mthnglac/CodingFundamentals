export default class DepthFirstSearch {
  private adjacencyList: Map<string, string>;
  private visited: Set<string>;
  private searchStart: string;

  constructor(start: string) {
    this.adjacencyList = new Map();
    this.visited = new Set();
    this.searchStart = start;
  }

  public search(): void {
    this.visited.add(this.searchStart)
    const destinations: string = this.adjacencyList.get(this.searchStart);
    for (const destination of destinations) {
      if (destination === 'BKK') {
        console.log('found it!')
      } else if (!this.visited.has(destination)) {
        this.search(destination, visited);
      }
    }
  }
}
