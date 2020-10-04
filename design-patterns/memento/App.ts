import Originator from './Originator';
import Caretaker from './Caretaker';

export default class App {
  public clientCode() {
    const originator = new Originator('Super-duper-super-puper-super.');
    const caretaker = new Caretaker(originator);

    caretaker.backup();
    originator.doSomething();

    caretaker.backup();
    originator.doSomething();

    caretaker.backup();
    originator.doSomething();

    console.log('');
    caretaker.showHistory();

    console.log('\nClient: Now, let\'s rollback!\n');
    caretaker.undo();

    console.log('\nClient: Once more!\n');
    caretaker.undo();
  }
}

const z: App = new App();
z.clientCode();
