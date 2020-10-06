import CustomerManager from './CustomerManager';
import OracleCustomerDAL from './OracleCustomerDAL';
//import MySQLCustomerDAL from './MySQLCustomerDAL';

export default class App {
  public clientApp(): void {
    const manager: CustomerManager = new CustomerManager(new OracleCustomerDAL);
    //const manager: CustomerManager = new CustomerManager(new MySQLCustomerDAL);
    manager.add();
  }
}

const z: App = new App();
z.clientApp();
