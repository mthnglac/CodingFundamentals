import ICustomerDAL from './ICustomerDAL';

export default class MySQLCustomerDAL implements ICustomerDAL {
  public add(): void {
    console.log('Data added to MYSQL database');
  }
}
