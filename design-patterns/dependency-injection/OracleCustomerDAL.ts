import ICustomerDAL from './ICustomerDAL';

export default class OracleCustomerDAL implements ICustomerDAL {
  public add(): void {
    console.log("Data added to ORACLE database");
  }
}
