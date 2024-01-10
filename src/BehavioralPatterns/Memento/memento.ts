/**
 * The Originator holds some important state that may change over time.
 * 原發器有著可能隨時間變動的狀態。
 *
 * It also defines a method for saving the state inside a memento and another method for restoring the state from it.
 * 也有著兩個方法，第一個方法會在備忘錄中儲存狀態，而另一個方法會依據被儲存的狀態進行狀態回朔。
 */
class Originator {
    /**
     * For the sake of simplicity, the originator's state is stored inside a single variable.
     * 為了簡單起見，原發者的狀態會儲存在單一變數中。
     */
    private state: string;

    constructor(state: string) {
        this.state = state;
        console.log(`Originator: My initial state is: ${state}`);
    }

    /**
     * The Originator's business logic may affect its internal state.
     * 原發器的業務邏輯可能會影響自身的內部狀態。
     *
     * Therefore, the client should backup the state before launching methods of the business logic via the save() method.
     * 因此，客戶端應該在呼叫業務邏輯的方法之前，透過 save() 方法備份狀態。
     */
    public doSomething(): void {
        console.log("Originator: I'm doing something important.");
        this.state = this.generateRandomString(30);
        console.log(`Originator: and my state has changed to: ${this.state}`);
    }

    private generateRandomString(length: number = 10): string {
        const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const mapfn = () =>
            charSet.charAt(Math.floor(Math.random() * charSet.length));

        return Array.from({ length }, mapfn).join("");
    }

    /**
     * Saves the current state inside a memento.
     * 將當前狀態儲存在一個備忘錄。
     */
    public save(): Memento {
        return new ConcreteMemento(this.state);
    }

    /**
     * Restores the Originator's state from a memento object.
     * 從備忘錄恢復原發器的狀態。
     */
    public restore(memento: Memento): void {
        this.state = memento.getState();
        console.log(`Originator: My state has changed to: ${this.state}`);
    }
}

/**
 * The Memento interface provides a way to retrieve the memento's metadata, such as creation date or name.
 * 備忘錄介面提供了取回備忘錄元數據的方式，像是創建日期或名稱。
 *
 * However, it doesn't expose the Originator's state.
 * 然而，它並不會暴露原發器的狀態。
 */
interface Memento {
    getState(): string;
    getName(): string;
    getDate(): string;
}

/**
 * The Concrete Memento contains the infrastructure for storing the Originator's state.
 */
class ConcreteMemento implements Memento {
    private state: string;
    private date: string;

    constructor(state: string) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace("T", " ");
    }

    /**
     * The Originator uses this method when restoring its state.
     * 原發器會用這個方法恢復自身狀態。
     */
    public getState(): string {
        return this.state;
    }

    /**
     * The rest of the methods are used by the Caretaker to display metadata.
     * 剩餘的方法是用來給負責人展示元數據。
     */
    public getName(): string {
        return `${this.date} / ${this.state.substring(0, 9)}...`;
    }

    public getDate(): string {
        return this.date;
    }
}

/**
 * The Caretaker doesn't depends on the Concrete Memento class.
 *
 * Therefore, it doesn't have access to the originator's state, stored inside the memento.
 *
 * It works with all mementos via the base Memento interface.
 */
class Caretaker {
    private mementos: Memento[] = [];
    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public backup(): void {
        console.log("Caretaker: Saving Originator's state...");
        this.mementos.push(this.originator.save());
    }

    public undo(): void {
        if (!this.mementos.length) return;

        const memento = this.mementos.pop() as Memento;

        console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
        this.originator.restore(memento);
    }

    public showHistory(): void {
        console.log("Caretaker: Here's the list of mementos:");
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}

import print from "../../utils/print";
const { Scope, printBlock } = print;
export default printBlock(Scope.h2, "Memento Pattern", function () {
    const originator = new Originator("Super-duper-super-puper-super.");
    const caretaker = new Caretaker(originator);

    caretaker.backup();
    originator.doSomething();

    caretaker.backup();
    originator.doSomething();

    caretaker.backup();
    originator.doSomething();

    console.log("");
    caretaker.showHistory();

    console.log("\nClient: Now, let's rollback!\n");
    caretaker.undo();

    console.log("\nClient: Once more!\n");
    caretaker.undo();
});
