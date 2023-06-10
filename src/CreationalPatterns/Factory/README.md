# Factory Method pattern (工廠模式)

> The **_Factory Pattern_** is a creational design pattern that provides an interface for creating objects, but allows subclasses to decide which class to instantiate. It encapsulates the object creation logic in a seperate component, know as the factory, which is responsible for creating instances of various related classes based on specific conditions or parameters.

## Concept

The main concept behind the Fatory Pattern is to abstract the process of object creation, decoupling the client code from the specific classes being instantiated, Instead of directly calling a constructor to create objects, the client interacts with the factory interface, which internally determines the appropriate class to instantiate and returns the desired object.

## Application Scenarios

- The client code needs to create objects of a certain type, but the exact class to instantiate may vary based on specific conditions or configuratios.
- The creation process of objects is complex or requires specific initialization steps. and it is beneficial to encapsulate this logic in a seperate factory component.
- The client code needs to work with objects through a commom interface or base class, without being aware of the specific subclasses or their creation details.

## Pros and Cons

### Advantages

1. Encapsulation: The Factory encapsulates the object creation logic, providing a clear separation between the client code and the concrete classes being instantiaed.
2. Flexibility: By using a factory interface, the client code can easily switch between different implementations or variations of the created objects without modifying its own code.
3. Code Oranization: The Factory Pattern helps to organize and centralize the object creation logic, making the code base more maitainable and easier to understand.

### Disadvantages

1. Increased Complexity: Intoducing a factory component adds an extra layer of abstraction, which may increase the overall complexity of the system.
2. Dependency on the Factory: The client code becomes dependent on the factory interface, which can make the code less flexible if the factory interface needs to be modified.
3. Runtime Overhaead: Depending on the implementation, the factory pattern may introduce some runtime overhead due to the additional indirection and object creation logic.

---

In summary, the Factory Pattern is a design pattern that provides an interface for creating objects, allowing subclasses or implementations to decide which class to instantiate. It promotes encapsulation, flexibilty, and code organization, but it may also introduce complexity and runtime overhead. It is suitable for scenarios where object creation needs to be abstracted and varied based on specific conditions or configurations.
