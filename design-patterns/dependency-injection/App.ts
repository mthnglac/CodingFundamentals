import CustomerManager from './CustomerManager';
import CustomerDAL from './CustomerDAL';
//import MySQLCustomerDAL from './MySQLCustomerDAL';

export default class App {
  public clientApp(): void {
    const manager: CustomerManager = new CustomerManager(new CustomerDAL);
    //const manager: CustomerManager = new CustomerManager(new MySQLCustomerDAL);
    manager.add();
  }
}

const z: App = new App();
z.clientApp();
