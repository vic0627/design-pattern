/**
 * The Facade class provides a simple interface to the complex logic of one or
 * several subsystems.
 * 外觀類別為一個或多個子系統的複雜邏輯提供了一個簡單的介面。
 *
 * The Facade delegates the client requests to the appropriate objects within
 * the subsystem.
 * 外觀將客戶端請求委託給子系統內的適當物件。
 *
 * The Facade is also responsible for managing their lifecycle.
 * 外觀也負責管理它們的生命週期。
 *
 * All of this shields the client from the undesired complexity of the subsystem.
 * 所有這些都使客戶免受子系統不必要的複雜性的影響。
 */
class Facade {
    protected subsystem1: Subsystem1;

    protected subsystem2: Subsystem2;

    /**
     * Depending on your application's needs, you can provide the Facade with
     * existing subsystem objects or force the Facade to create them on its own.
     * 根據應用程式的需求，您可以為外觀提供現有的子系統對象，或強制外觀自行建立它們。
     */
    constructor(subsystem1?: Subsystem1, subsystem2?: Subsystem2) {
        this.subsystem1 = subsystem1 || new Subsystem1();
        this.subsystem2 = subsystem2 || new Subsystem2();
    }

    /**
     * The Facade's methods are convenient shortcuts to the sophisticated
     * functionality of the subsystems.
     * 外觀的方法是子系統複雜的功能的便利捷徑。
     *
     * However, clients get only to a fraction of a subsystem's capabilities.
     * 然而，客戶只能獲得子系統功能的一小部分。
     */
    public operation(): string {
        let result = "Facade initializes subsystems:\n";
        result += this.subsystem1.operation1();
        result += this.subsystem2.operation1();
        result += "Facade orders subsystems to perform the action:\n";
        result += this.subsystem1.operationN();
        result += this.subsystem2.operationZ();

        return result;
    }
}

/**
 * The Subsystem can accept requests either from the facade or client directly.
 * 子系統可以直接接受來自外觀或客戶端的請求。
 *
 * In any case, to the Subsystem, the Facade is yet another client, and it's not
 * a part of the Subsystem.
 * 無論如何，對於子系統來說，外觀是另一個客戶端，它不是子系統的一部分。
 */
class Subsystem1 {
    public operation1(): string {
        return "Subsystem1: Ready!\n";
    }

    public operationN(): string {
        return "Subsystem1: Go!\n";
    }
}

/**
 * Some facades can work with multiple subsystem at the same time.
 * 有些外觀可以同時與多個子系統一起工作。
 */
class Subsystem2 {
    public operation1(): string {
        return "Subsystem1: Get Ready!\n";
    }

    public operationZ(): string {
        return "Subsystem1: Fire!\n";
    }
}

/**
 * The client code works with complex subsystems through a simple interface
 * provided by the Facade.
 * 客戶端程式碼透過外觀提供的簡單介面與複雜的子系統一起工作。
 *
 * When a facade manages the lifecycle of the subsystem, the client might not
 * even know about the existence of the subsystem.
 * 當外觀管理著子系統的生命週期時，客戶端甚至不會知道子系統的存在。
 *
 * This approach lets you keep the complexity under control.
 * 這種方法可以讓您控制複雜性。
 */
function clientCode(facade: Facade) {
    console.log(facade.operation());
}

export default () => {
    /**
     * The client code may have some of the subsystem's objects already created.
     * 客戶端程式碼可能已經建立了一些子系統的對象。
     *
     * In this case, it might be worthwhile to initialize the Facade with these
     * objects instead of letting the Facade create new instances.
     * 這個案例當中，以這些對象來初始化外觀可能會比讓外觀自行建立實例來的更值得。
     */
    const subsystem1 = new Subsystem1();
    const subsystem2 = new Subsystem2();
    const facade = new Facade(subsystem1, subsystem2);
    clientCode(facade);
};
