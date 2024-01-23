/**
 * Product Interface
 */
interface Product {
    operation(): void;
}

/**
 * Concrete Product A
 */
class ConcreteProductA implements Product {
    operation(): void {
        console.log("Concrete Product A operation.");
    }
}

/**
 * Concrete Product B
 */
class ConcreteProductB implements Product {
    operation(): void {
        console.log("Concrete Product B operation.");
    }
}

/**
 * Creator (Factory) abstract class
 */
abstract class Creator {
    abstract factoryMethod(): Product;
    someOperation(): void {
        const product = this.factoryMethod();
        product.operation();
    }
}

/**
 * Concrete Creator A
 */
class ConcreteCreatorA extends Creator {
    factoryMethod(): Product {
        return new ConcreteProductA();
    }
}

/**
 * Concrete Creator B
 */
class ConcreteCreatorB extends Creator {
    factoryMethod(): Product {
        return new ConcreteProductB();
    }
}

export default () => {
    const creatorA = new ConcreteCreatorA();
    creatorA.someOperation();

    const creatorB = new ConcreteCreatorB();
    creatorB.someOperation();
};
