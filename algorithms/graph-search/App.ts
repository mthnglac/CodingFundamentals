import BreadthFirstSearch from "./BreadthFirstSearch";
import DepthFirstSearch from "./DepthFirstSearch";

export default class App {
  private adjacencyList: Map<string, string[]>;
  private airports: string[];
  private routes: string[][];

  constructor() {
    this.adjacencyList = new Map();
    this.airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");
    this.routes = [
      ["PHX", "LAX"],
      ["PHX", "JFK"],
      ["JFK", "OKC"],
      ["JFK", "HEL"],
      ["JFK", "LOS"],
      ["MEX", "LAX"],
      ["MEX", "BKK"],
      ["MEX", "LIM"],
      ["MEX", "EZE"],
      ["LIM", "BKK"],
    ];
  }

  public addNode(airport: string): void {
    this.adjacencyList.set(airport, []);
  }

  public addEdge(origin: string, destination: string): void {
    this.adjacencyList.get(origin)?.push(destination);
    this.adjacencyList.get(destination)?.push(origin);
  }
  public clientApp(): void {
    this.airports.forEach((airport) => this.addNode(airport));
    this.routes.forEach((route) => this.addEdge(route[0], route[1]));

    console.log(this.adjacencyList);

    console.log('');
    console.log("---------------------");

    const brf: BreadthFirstSearch = new BreadthFirstSearch(this.adjacencyList);
    brf.search("PHX");

    console.log('');
    console.log("---------------------");

    const dfs: DepthFirstSearch = new DepthFirstSearch(this.adjacencyList);
    dfs.search("PHX");
  }
}

const z: App = new App();
z.clientApp();
