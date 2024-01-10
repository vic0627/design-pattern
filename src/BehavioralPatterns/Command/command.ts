/**
 * The Command interface declares a method for executing a command.
 * 命令介面宣告一個方法來執行命令。
 */
interface Command {
    execute(): void;
}

/**
 * Some commands can implement simple operations on their own.
 * 有些命令可以自己實現簡單的操作。
 */
class SimpleCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): void {
        console.log(
            `SimpleCommand: See, I can do things like printing (${this.payload})`
        );
    }
}

/**
 * However, some commands can delegate more complex operations to other objects, called 'receivers'.
 * 然而，有些命令可以委派更多複雜的操作給其他對象，我們把它稱為「接收者」。
 */
class ComplexCommand implements Command {
    private receiver: Receiver;

    /**
     * Context data, required for launching the receiver's methods.
     * 上下文數據，會在呼叫接收者的方法時用到。
     */
    private a: string;
    private b: string;

    /**
     * Complex commands can accept one or several receiver objects along with any context data via the constructor.
     * 複雜的命令可以透過建構函式接受一或多個接收者對象以及任何上下文數據。
     */
    constructor(receiver: Receiver, a: string, b: string) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }

    /**
     * Commands can delegate to any methods of a receiver.
     * 命令可以委託任何方法給接收者。
     */
    public execute(): void {
        console.log(
            "ComplexCommand: Complex stuff should be done by a receiver object."
        );
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    }
}

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
class Receiver {
    public doSomething(a: string): void {
        console.log(`Receiver: Working on (${a}).`);
    }

    public doSomethingElse(b: string): void {
        console.log(`Receiver: Also working on (${b}).`);
    }
}

/**
 * The Invoker is associated with one or several commands.
 * 
 * It sends a request to the command.
 */
class Invoker {
    private onStart?: Command;
    private onFinsih?: Command;

    /**
     * Initialize commands.
     */
    public setOnStart(command: Command): void {
        this.onStart = command;
    }

    public setOnFinish(command: Command): void {
        this.onStart = command;
    }

    /**
     * The Invoker does not depend on concrete command or receiver classes.
     * 
     * The Invoker passes a request to a receiver indirectly, by executing a command.
     */
    public doSomethingImportant(): void {
        console.log(
            "Invoker: Does anybody want something donw before I begin?"
        );
        if (this.isCommand(this.onStart)) this.onStart.execute();

        console.log("Invoker: ...doing something really important...");

        console.log(
            "Invoker: Does anybody want something done after I finish?"
        );
        if (this.isCommand(this.onFinsih)) this.onFinsih.execute();
    }

    private isCommand(object: any): object is Command {
        return object?.execute !== undefined;
    }
}
