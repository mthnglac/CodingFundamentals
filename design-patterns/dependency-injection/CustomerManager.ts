import ICustomerDAL from './ICustomerDAL';

export default class CustomerManager {
  private customerDAL: ICustomerDAL;

  constructor(customerDAL: ICustomerDAL) {
    this.customerDAL = customerDAL;
  }

  public add(): void {
    this.customerDAL.add();
  }
}
