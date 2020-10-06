import ICustomerDAL from './ICustomerDAL';

export default class CustomerDAL implements ICustomerDAL {
  public add(): void {
    console.log('Data added to ORACLE database');
  }
}
