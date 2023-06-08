// The Singleton class defines the `getInstance` method that lets clients access the unique singleton instance.
class SingletonPerson {
    // The member variable that stores the singleton instance must be declared as a static type.
    private static instance: SingletonPerson;

    // Private Constructor
    // The Singleton's constructor should always be private to prevent direct construction calls with the `new` operator.
    private constructor(public readonly name: string) {}

    // Lazy Initialization
    // The static method that controls the access to the singleton instance.
    // This implemention let you subclass the Singleton class while keeping just one instance of each subclass around.
    public static getInstance(name?: string): SingletonPerson {
        if (!SingletonPerson.instance) {
            name = name ?? "Joanne";
            SingletonPerson.instance = new SingletonPerson(name);
        }
        return SingletonPerson.instance;
    }

    // Public Methods
    // Any singleton should define some business logic, which can be executed on its instance.
    public printPerson() {
        console.log(`Hi, this is ${this.name}!`);
    }
}

// The client code
import print from "../../utils/print";
const { Scope, printBlock } = print;
export default printBlock(Scope.h2, "Singleton Pattern", function () {
    const ins1 = SingletonPerson.getInstance();
    ins1.printPerson(); // <- Hi, this is Joanne!

    const ins2 = SingletonPerson.getInstance("John");
    ins1.printPerson(); // <- Hi, this is Joanne!

    console.log(ins1 === ins2); // <- true
});
