import print from "../../utils/print";
/**
 * This Strategy interface declares operations common to all supported versions
 * of some algorithm.
 *
 * The Context uses this interface to call the algorithm defined by Concrete
 * Strategies.
 */
interface Strategy {
    doAlgorithm(data: string[]): string[];
}

/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 */
class ConcreteStrategyA implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}
class ConcreteStrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}

/**
 * The Context defines the interface of interest to client.
 */
class Context {
    /**
     * @type {Strategy} The Context maintains a reference to one of the Strategy
     * objects. The Context does not know the concrete class of a strategy. It
     * should work with all strategies via the Strategy interface.
     */
    private strategy: Strategy;

    /**
     * Usually, the Context accepts a strategy through the constructor, but also
     * provides a setter to change it at runtume.
     */
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    /**
     * Usually, the Context allows replacing a Strategy object at runtime.
     */
    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    /**
     * The Context delegates some work to the Strategy object instead of
     * implementing multiple versions of the algorithm on its own.
     */
    public doSomeBusinessLogic(data: string[]): void {
        const result = this.strategy.doAlgorithm(data);
        console.log(result.join(", "));
    }
}

const { Scope, printBlock } = print;
export default printBlock(Scope.h2, "Strategy Pattern", function () {
    const context = new Context(new ConcreteStrategyA());
    const data = ["b", "d", "c", "a", "e"];
    console.log("Original data: " + data.join(", "));
    console.log("use StrategyA");
    context.doSomeBusinessLogic(data);
    context.setStrategy(new ConcreteStrategyB());
    console.log("use StrategyB");
    context.doSomeBusinessLogic(data);
});
