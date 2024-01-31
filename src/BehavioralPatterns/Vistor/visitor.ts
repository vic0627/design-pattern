namespace VisitorPattern {
    /**
     * The Component interface declares an `accept` method that should take the base visitor interface as an argument.
     * Component 介面聲明了一個「accept」方法，該方法應將基本 visitor 介面作為參數。
     */
    interface Component {
        accept(visitor: Visitor): void;
    }

    /**
     * Each Concrete Component must implement the `accept` method in such a way that it calls the visitor's method corresponding to the component's class.
     * 每個實體 Component 必須實踐「accept」方法，以這樣的方式呼叫與 component 類別相對應的 visitor 方法。
     */
    class ConcreteComponentA implements Component {
        /**
         * Note that we're calling `visitConreteComponentA`, which matchs the current class name.
         * 請注意，我們正在呼叫 「visitConreteComponentA」，它與目前的類別名稱相符。
         * 
         * This way let the visitor know the class of the component it works with.
         * 這樣可以讓 visitor 知道它所使用的 component 的類別。
         */
        public accept(visitor: Visitor): void {
            visitor.visitConcreteComponentA(this);
        }

        /**
         * Concrete Components may have special methods that don't exist in their base class or interface.
         * 具體 Component 可能具有其基底類別或介面中不存在的特殊方法。
         *
         * The Visitor is still able to use these methods since it's aware of the component's concrete class.
         * 訪客仍然能夠使用這些方法，因為它知道 Component 的特定類別。
         */
        public exclusiveMethodOfConcreteComponentA(): string {
            return "A";
        }
    }

    class ConcreteComponentB implements Component {
        /**
         * Same here: visitConcreteComponentB => ConcreteComponentB
         */
        public accept(visitor: Visitor): void {
            visitor.visitConcreteComponentB(this);
        }

        public specialMethodOfConcreteComponentB(): string {
            return "B";
        }
    }

    /**
     * The Visitor Interface declares a set of visiting methods that correspond to component classes.
     * Visitor 介面聲明了一組與 component 類別相對應的存取方法。
     *
     * The signature of a visiting method allows the visitor to identify the exact class of the component that it's dealing with.
     * 存取方法的簽章允許 visitor 識別其正在處理的 component 的確切類別。
     */
    interface Visitor {
        visitConcreteComponentA(element: ConcreteComponentA): void;
        visitConcreteComponentB(element: ConcreteComponentB): void;
    }

    /**
     * Concrete Visitors implement several versions of the same algorithm, which can work with all conrete component classes.
     * 實體 Visitor 實踐了數個相同版本的算法，而算法可以與所有實體 component 一起運作。
     *
     * You can experience the biggest benefit of the Visitor pattern when using it with a complex object structure, such as a Composite tree.
     * 當訪問者模式與複雜的物件結構（例如：組合樹）配合使用，你會體驗到訪問者模式的最大效益。
     *
     * In this case, it might be helpful to store some intermediate state of the algorithm while executing visitor's methods over various objects of the structure.
     * 在這種情況下，在結構的各個物件上執行訪客的方法時，儲存演算法的一些中級狀態可能會有所幫助。
     */
    export class ConcreteVisitor1 implements Visitor {
        public visitConcreteComponentA(element: ConcreteComponentA): void {
            console.log(
                `${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`
            );
        }

        public visitConcreteComponentB(element: ConcreteComponentB): void {
            console.log(
                `${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`
            );
        }
    }

    export class ConcreteVisitor2 implements Visitor {
        public visitConcreteComponentA(element: ConcreteComponentA): void {
            console.log(
                `${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor2`
            );
        }

        public visitConcreteComponentB(element: ConcreteComponentB): void {
            console.log(
                `${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor2`
            );
        }
    }

    /**
     * The client code can run visitor operations over any set of elements without figuring out their concrete classes.
     * 客戶端程式碼可以對任何元素集執行訪客操作，而無需弄清楚它們的特定類別。
     *
     * The accept operation directs a call to the appropriate operation in the visitor object.
     * 「accept」將呼叫導向到訪問者物件中的適當操作。
     */
    export function clientCode(components: Component[], visitor: Visitor) {
        for (const component of components) {
            component.accept(visitor);
        }
    }

    export const components = [
        new ConcreteComponentA(),
        new ConcreteComponentB(),
    ];
}

export default () => {
    const { ConcreteVisitor1, ConcreteVisitor2, clientCode, components } =
        VisitorPattern;

    console.log(
        "The client code works with all visitor via the base Visitor interface:"
    );
    const visitor1 = new ConcreteVisitor1();
    clientCode(components, visitor1);
    console.log("");

    console.log(
        "It allows the same client code to work with different types of visitors:"
    );
    const visitor2 = new ConcreteVisitor2();
    clientCode(components, visitor2);
};
