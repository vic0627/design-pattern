/**
 * The base Component interface defines operations that can be altered by decorators.
 * 基本組件介面定義了可以由裝飾器變更的操作。
 */
interface Component {
    operation(): string;
}

/**
 * Concrete Componenets provide default implementations of the operations.
 * 具體組件提供操作的預設實作。
 *
 * There might be several variations of these classes.
 * 這些類別可能有多種變體。
 */
class ConcreteComponent implements Component {
    public operation(): string {
        return "ConcreteComponent";
    }
}

/**
 * The base Decorator class follows the same interface as the other components.
 * 基本裝飾器類別遵循與其他組件相同的介面。
 *
 * The primary purpose of the class is to define the wrapping interface for all concrete decorators.
 * 此類別的主要目的是為所有特定裝飾器定義包裝介面。
 *
 * The default implementation of the wrapping code might include a field for storing a wrapped component and the means to initialize it.
 * 包裝程式碼的預設實作可能包括一個用於儲存包裝組件的欄位以及初始化它的方法。
 */
class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    /**
     * The Decorator delegates all work to the wrapped component.
     * 裝飾器將所有工作委託給被包裝的組件。
     */
    public operation(): string {
        return this.component.operation();
    }
}

/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 * 具體裝飾器調用包裝的物件並以某種方式改變其結果。
 */
class ConcreteDecoratorA extends Decorator {
    /**
     * Decorators may call parent implementation of the operation, instead of calling the wrapped object directly.
     * 裝飾器可以呼叫操作的父實現，而不是直接呼叫包裝的物件。
     *
     * This approach simplifies extension of decorator classes.
     * 這種方法簡化了裝飾器類別的擴展。
     */
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

/**
 * Decorators can execute their behavior either before or after the call to a wrapped object.
 * 裝飾器可以在呼叫包裝物件之前或之後執行其行為。
 */
class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

/**
 * The client code works with all object using the Component interface.
 * 客戶端程式碼使用組件介面與所有物件一起工作。
 *
 * This way it can stay independent of the concrete classes of components it works with.
 * 這樣它就可以保持獨立於它所使用的組件的特定類別。
 */
function clientCode(component: Component) {
    console.log(`RESULT: ${component.operation()}`);
}

export default () => {
    /**
     * This way the client code can support both simple components...
     * 這樣，客戶端程式碼既可以支援簡單組件...
     */
    const simple = new ConcreteComponent();
    console.log("Client: I've got a simple component:");
    clientCode(simple);
    console.log("");

    /**
     * ...as well as decorated ones.
     * ，也可以支援裝飾過的組件。
     *
     * Note how decorators can wrap not only simple components but the other decorators as well.
     * 請注意裝飾器不僅可以包裝簡單的組件，還可以包裝其他裝飾器。
     */
    const decorator1 = new ConcreteDecoratorA(simple);
    const decorator2 = new ConcreteDecoratorB(decorator1);
    console.log("Client: Now I've got a decorated component:");
    clientCode(decorator2);
};
