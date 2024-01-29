interface Component {
    doSomething(): string;
}

class ConcreteComponent implements Component {
    @DecoratorA
    doSomething(): string {
        return "do something~";
    }
}

function DecoratorA(target: object, key: any) {
    console.log({ target, key });

    const result = typeof target === "function" && target();

    if (result) return () => `decoratorA(${result})`;
}

const cc = new ConcreteComponent();
const res = cc.doSomething();
console.log({ res });
