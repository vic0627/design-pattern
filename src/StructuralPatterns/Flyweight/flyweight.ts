/**
 * The Flyweight stores a common protion of the state (also called intrinsic state) that belongs to multiple real business entitied.
 * Flyweight 儲存屬於多個真實業務實體的狀態（也稱為內在狀態）的公共部分。
 *
 * The Flyweight accepts the rest of the state (extrinsic state, unique for each entity) via its method parameters.
 * Flyweight 透過其方法參數接受其餘狀態（外部狀態，對於每個實體來說都是唯一的）。
 */
class Flyweight {
    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState: any): void {
        const s = JSON.stringify(this.sharedState);
        const u = JSON.stringify(uniqueState);
        console.log(
            `Flyweight: Displaying shared (${s}) ans unique (${u}) state.`
        );
    }
}

/**
 * The Flyweight Factory creates and manages the Flyweight objects.
 * Flyweight Factory 建立並管理 Flyweight 物件。
 *
 * It ensures that flyweights are shared correctly.
 * 它確保正確共享享元。
 *
 * When the client requests a flyweight, the factory either returns an existing instance or creates an new one, if it doesn't exist yet.
 * 當客戶端請求享元時，工廠要麼傳回一個現有實例，要麼建立一個新實例（如果尚不存在）。
 */
class FlyweightFactory {
    private flyweights: { [key: string]: Flyweight } = <any>[];

    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }

    /**
     * Returns a Flyweight's string hash for a given state.
     * 傳回給定狀態的享元字串雜湊值。
     */
    private getKey(state: string[]): string {
        return state.join("_");
    }

    /**
     * Returns an existing Flyweight with a given state or creates a new one.
     */
    public getFlyweight(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState);

        if (!(key in this.flyweights)) {
            console.log(
                "FlyweightFactory: Can't find a flyweight, creating new one."
            );
            this.flyweights[key] = new Flyweight(sharedState);
        } else {
            console.log("FlyweightFactory: Reusing existing flyweight.");
        }

        return this.flyweights[key];
    }

    public listFlyweights(): void {
        const count = Object.keys(this.flyweights).length;
        console.log(`\nFlyweightFactory: I have ${count} flyweights:`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}

/**
 * The client code usually creates a bunch of pre-populated flyweights in the initialization stage of the application.
 * 客戶端程式碼通常在應用程式的初始化階段建立一堆預先填入的享元。
 */
const factory = new FlyweightFactory([
    ["Chevrolet", "Camaro2018", "pink"],
    ["Mercedes Benz", "C300", "black"],
    ["Mercedes Benz", "C500", "red"],
    ["BMW", "M5", "red"],
    ["BMW", "X6", "white"],
]);
factory.listFlyweights();

function addCarToPoliceDatabase(
    ff: FlyweightFactory,
    plates: string,
    owner: string,
    brand: string,
    model: string,
    color: string
) {
    console.log("\nClient: Adding a car to database.");
    const flyweight = ff.getFlyweight([brand, model, color]);

    /**
     * The client code either stores or calculates extrinsic state and passes it to the flyweight's methods.
     * 客戶端程式碼儲存或計算外部狀態並傳遞給享元的方法。
     */
    flyweight.operation([plates, owner]);
}

addCarToPoliceDatabase(factory, "CL234IR", "James Doe", "BMW", "M5", "red");

addCarToPoliceDatabase(factory, "CL234IR", "James Doe", "BMW", "X1", "red");

factory.listFlyweights();
