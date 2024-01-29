/**
 * The Context defines the interface of interest to clients.
 * Context 定義了客戶端感興趣的介面。
 *
 * It also maintains a reference to an instance of a State subclass, which represents the current state of the Context.
 * 它還維護對 State 子類別實例的引用，該實例表示 Context 的當前狀態。
 */
class Context {
    /**
     * A reference to the current state of the context.
     * 對上下文當前狀態的引用。
     */
    private state!: State;

    constructor(state: State) {
        this.transitionTo(state);
    }

    /**
     * The Context allows changing the State object at runtime.
     * Context 允許在運行時更改 State 物件。
     */
    public transitionTo(state: State): void {
        console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }

    /**
     * The Context delegates part of its behavior to the current State object.
     * Context 將其部分行為委託給目前 State 物件。
     */
    public request1(): void {
        this.state.handle1();
    }

    public request2(): void {
        this.state.handle2();
    }
}

/**
 * The base State class declares methods that all Concrete State should implement and also provides a backreference to the Context object, associated with the State.
 * State 基底類別聲明了所有特定 State 都應該實現的方法，並且還提供了與 State 關聯的 Context 物件的反向引用。
 *
 * This backreference can be used by States to transition the Context to another State.
 * 狀態可以使用此反向引用將上下文轉換到另一個狀態。
 */
abstract class State {
    protected context!: Context;

    public setContext(context: Context) {
        this.context = context;
    }

    public abstract handle1(): void;

    public abstract handle2(): void;
}

/**
 * Concrete States implement various behaviors, associated with a state of the Context.
 * 具體狀態實現與情境狀態相關的各種行為。
 */
class ConcreteStateA extends State {
    public handle1(): void {
        console.log("ConcreteStateA handles request1.");
        console.log("ConcreteStateA wants to change the state of the context.");
        this.context.transitionTo(new ConcreteStateB());
    }

    public handle2(): void {
        console.log("ConcreteStateA handles request2.");
    }
}

class ConcreteStateB extends State {
    public handle1(): void {
        console.log("ConcreteStateA handles request1.");
    }

    public handle2(): void {
        console.log("ConcreteStateB handles request2.");
        console.log("ConcreteStateB wants to change the state of the context.");
        this.context.transitionTo(new ConcreteStateA());
    }
}

export default () => {
    const context = new Context(new ConcreteStateA());
    context.request1();
    context.request2();
};
