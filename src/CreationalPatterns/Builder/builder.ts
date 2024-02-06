/**
 * The Builder interface specifies methods for creating the different parts of the Product objects.
 */
interface Builder {
    productPartA(): void;
    productPartB(): void;
    productPartC(): void;
}

/**
 * The Concrete Builder classes follow the Builder interface and provide specific implementations of the building steps.
 *
 * Your program may have several variations of Builders, implemented differently.
 */
class ConcreteBuilder1 implements Builder {
    private product?: Product1;

    /**
     * A fresh builder instance should contain a blank product object, which is used is further assembly.
     */
    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product1();
    }

    /**
     * All production steps work with the same product instance.
     */
    public productPartA(): void {
        this.product?.parts.push("PartA1");
    }

    public productPartB(): void {
        this.product?.parts.push("PartB1");
    }

    public productPartC(): void {
        this.product?.parts.push("PartC1");
    }

    /**
     * Concrete Builders are supposed to provide their own methods for retrieving results.
     *
     * That's because various types of builders may create entirely different products that don't follow the same interface.
     *
     * Therefore, such methods cannot be declared in the base Builder interface (at least in a staticallu typed programming language).
     *
     * Usually, after returning the end result to the client, a builder instance is expected to be ready to start producing another product.
     *
     * That's why it's a usual practice to call the reset method at the end of `getProduct` method body.
     *
     * However, this behavior is not mandatory, and you can make your builders wait for an explicit reset call from the client code before disposing of the previous result.
     */
    public getProduct(): Product1 | undefined {
        const res = this.product;
        this.reset();
        return res;
    }
}

/**
 * It makes sense to use the Builder pattern only when your products are quite complex and require extensive configuration.
 *
 * Unlike in other creational patterns, different concrete builders can produce unrelated produtcts.
 *
 * In other words, results of various builders may not always follow the same interface.
 */
class Product1 {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(", ")}\n`);
    }
}

/**
 * The Director is only responsible for excuting the building steps in a particular sequence.
 *
 * It is helpful when producing products according to a specific order or configuration.
 *
 * Strictly speaking, the Director class is optional, since the client can control builders directly.
 */
class Director {
    private builder?: Builder;

    /**
     * The Director works with any builder instance that the client code passes to it.
     *
     * This way, the client code may alter the final type of the newly assembled product.
     */
    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    /**
     * The Director can construct several product variations using the same steps.
     */
    public buildMinimalViableProduct(): void {
        this.builder?.productPartA();
    }

    public buildFullFeatureProduct(): void {
        this.builder?.productPartA();
        this.builder?.productPartB();
        this.builder?.productPartC();
    }
}

/**
 * The client code creates a builder object, passes it to the director and initiates the construction process.
 *
 * The end result is retrieved from the builder object.
 */
function clientCode(director: Director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log("Standard basic product:");
    director.buildMinimalViableProduct();
    builder.getProduct()?.listParts();

    console.log("Standard full featured product:");
    director.buildFullFeatureProduct();
    builder.getProduct()?.listParts();

    /**
     * Remember, the Builder pattern can be used without a Director class.
     */
    console.log("Custom product:");
    builder.productPartA();
    builder.productPartC();
    builder.getProduct()?.listParts();
}

export default () => {
    const director = new Director();
    clientCode(director);
};
