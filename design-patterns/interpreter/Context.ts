export default class Context {
  private readonly _map: Map<string, boolean>;

  constructor() {
    this._map = new Map();
  }

  public getMap(exp: string): boolean | undefined {
    return this._map.get(exp);
  }

  public setMap(variable: string, value: boolean) {
    this._map.set(variable, value);
  }
}
