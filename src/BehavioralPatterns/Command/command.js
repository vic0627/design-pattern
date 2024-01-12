/**
 * Some commands can implement simple operations on their own.
 * 有些命令可以自己實現簡單的操作。
 */
var SimpleCommand = /** @class */ (function () {
    function SimpleCommand(payload) {
        this.payload = payload;
    }
    SimpleCommand.prototype.execute = function () {
        console.log("SimpleCommand: See, I can do things like printing (".concat(this.payload, ")"));
    };
    return SimpleCommand;
}());
/**
 * However, some commands can delegate more complex operations to other objects, called 'receivers'.
 * 然而，有些命令可以委派更多複雜的操作給其他對象，我們把它稱為「接收者」。
 */
var ComplexCommand = /** @class */ (function () {
    /**
     * Complex commands can accept one or several receiver objects along with any context data via the constructor.
     * 複雜的命令可以透過建構函式接受一或多個接收者對象以及任何上下文數據。
     */
    function ComplexCommand(receiver, a, b) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }
    /**
     * Commands can delegate to any methods of a receiver.
     * 命令可以委託任何方法給接收者。
     */
    ComplexCommand.prototype.execute = function () {
        console.log("ComplexCommand: Complex stuff should be done by a receiver object.");
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    };
    return ComplexCommand;
}());
/**
 * The Receiver classes contain some important business logic.
 * 接收者類別會包含一些重要的業務邏輯。
 *
 * They know how to perform all kinds of operations, associated with carrying out a request.
 * 他們知道如何執行與執行請求相關的各種操作。
 *
 * In fact, any class may serve as a Receiver.
 * 事實上，任何類別都可以充當接收者。
 */
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.doSomething = function (a) {
        console.log("Receiver: Working on (".concat(a, ")."));
    };
    Receiver.prototype.doSomethingElse = function (b) {
        console.log("Receiver: Also working on (".concat(b, ")."));
    };
    return Receiver;
}());
/**
 * The Invoker is associated with one or several commands.
 * 觸發者會與單或多個命令產生關聯。
 *
 * It sends a request to the command.
 * 它會向命令發送請求。
 */
var Invoker = /** @class */ (function () {
    function Invoker() {
    }
    /**
     * Initialize commands.
     * 初始化命令。
     */
    Invoker.prototype.setOnStart = function (command) {
        this.onStart = command;
    };
    Invoker.prototype.setOnFinish = function (command) {
        this.onStart = command;
    };
    /**
     * The Invoker does not depend on concrete command or receiver classes.
     * 觸發者不依賴於實體命令或接收者類別。
     *
     * The Invoker passes a request to a receiver indirectly, by executing a command.
     * 觸發者透過執行命令來間接地傳遞請求給接收者。
     */
    Invoker.prototype.doSomethingImportant = function () {
        console.log("Invoker: Does anybody want something donw before I begin?");
        if (this.isCommand(this.onStart))
            this.onStart.execute();
        console.log("Invoker: ...doing something really important...");
        console.log("Invoker: Does anybody want something done after I finish?");
        if (this.isCommand(this.onFinsih))
            this.onFinsih.execute();
    };
    Invoker.prototype.isCommand = function (object) {
        return (object === null || object === void 0 ? void 0 : object.execute) !== undefined;
    };
    return Invoker;
}());
/**
 * The client code can parameterize an invoker with any commands.
 * 客戶端程式碼可以使用任何命令參數化呼叫程式。
 */
var invoker = new Invoker();
invoker.setOnStart(new SimpleCommand("Say Hi!"));
var receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, "Send mail", "Save report"));
invoker.doSomethingImportant();
