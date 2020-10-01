export default class Singleton {
  private static _instance: Singleton;

  private constructor() {}

  public static get Instance(): Singleton {
    return this._instance || (this._instance = new Singleton());
  }
}
