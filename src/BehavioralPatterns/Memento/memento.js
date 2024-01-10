/**
 * The Originator holds some important state that may change over time.
 * 原發器有著可能隨時間遍動的狀態。
 *
 * It also defines a method for saving the state inside a memento and another method for restoring the state from it.
 * 也有著兩個方法，第一個方法會在備忘錄中儲存狀態，而另一個方法會依據被儲存的狀態進行狀態回朔。
 */
var Originator = /** @class */ (function () {
    function Originator(state) {
        this.state = state;
        console.log("Originator: My initial state is: ".concat(state));
    }
    /**
     * The Originator's business logic may affect its internal state.
     * 原發器的業務邏輯可能會影響自身的內部狀態。
     *
     * Therefore, the client should backup the state before launching methods of the business logic via the save() method.
     * 因此，客戶端應該在呼叫業務邏輯的方法之前，透過 save() 方法備份狀態。
     */
    Originator.prototype.doSomething = function () {
        console.log("Originator: I'm doing something important.");
        this.state = this.generateRandomString(30);
        console.log("Originator: and my state has changed to: ".concat(this.state));
    };
    Originator.prototype.generateRandomString = function (length) {
        if (length === void 0) { length = 10; }
        var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var mapfn = function () {
            return charSet.charAt(Math.floor(Math.random() * charSet.length));
        };
        return Array.from({ length: length }, mapfn).join("");
    };
    /**
     * Saves the current state inside a memento.
     * 將當前狀態儲存在一個備忘錄。
     */
    Originator.prototype.save = function () {
        return new ConcreteMemento(this.state);
    };
    /**
     * Restores the Originator's state from a memento object.
     * 從備忘錄恢復原發器的狀態。
     */
    Originator.prototype.restore = function (memento) {
        this.state = memento.getState();
        console.log("Originator: My state has changed to: ".concat(this.state));
    };
    return Originator;
}());
/**
 * The Concrete Memento contains the infrastructure for storing the Originator's state.
 */
var ConcreteMemento = /** @class */ (function () {
    function ConcreteMemento(state) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace("T", " ");
    }
    /**
     * The Originator uses this method when restoring its state.
     * 原發器會用這個方法恢復自身狀態。
     */
    ConcreteMemento.prototype.getState = function () {
        return this.state;
    };
    /**
     * The rest of the methods are used by the Caretaker to display metadata.
     * 剩餘的方法是用來給負責人展示元數據。
     */
    ConcreteMemento.prototype.getName = function () {
        return "".concat(this.date, " / ").concat(this.state.substring(0, 9), "...");
    };
    ConcreteMemento.prototype.getDate = function () {
        return this.date;
    };
    return ConcreteMemento;
}());
/**
 * The Caretaker doesn't depends on the Concrete Memento class.
 *
 * Therefore, it doesn't have access to the originator's state, stored inside the memento.
 *
 * It works with all mementos via the base Memento interface.
 */
var Caretaker = /** @class */ (function () {
    function Caretaker(originator) {
        this.mementos = [];
        this.originator = originator;
    }
    Caretaker.prototype.backup = function () {
        console.log("Caretaker: Saving Originator's state...");
        this.mementos.push(this.originator.save());
    };
    Caretaker.prototype.undo = function () {
        if (!this.mementos.length)
            return;
        var memento = this.mementos.pop();
        console.log("Caretaker: Restoring state to: ".concat(memento.getName()));
        this.originator.restore(memento);
    };
    Caretaker.prototype.showHistory = function () {
        console.log("Caretaker: Here's the list of mementos:");
        for (var _i = 0, _a = this.mementos; _i < _a.length; _i++) {
            var memento = _a[_i];
            console.log(memento.getName());
        }
    };
    return Caretaker;
}());
// import print from "../../utils/print";
// const { Scope, printBlock } = print;
// export default printBlock(Scope.h2, "Memento Pattern", function () {
var originator = new Originator("Super-duper-super-puper-super.");
var caretaker = new Caretaker(originator);
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
// });
