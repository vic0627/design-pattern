# Prototype Pattern （原型模式）

## Concept

The Prototype Pattern is a creational design pattern that allows the creation of new objects by copying an existing object, known as the prototype. Instead of creating objects from scratch, the pattern involves creating copies (clones) of an existing object, promoting flexibility and reducing the need for subclassing.

## Structure and Components

![prototype](https://refactoringguru.cn/images/patterns/diagrams/prototype/structure-indexed.png)

- **Prototype**: Declares an interface for cloning itself.
- **ConcretePrototype**: Implements the clone method defined in the Prototype interface, providing a way to create a copy of itself.
- **Client**: Initiates the cloning process by requesting a copy from a prototype.

## Application Scenarios

1. **Complex Object Creation**: When the cost of creating an object is more expensive than copying an existing object.
2. **Configuration Management**: Useful in scenarios where objects need to be configured based on a prototype, reducing the need for complex initialization.
3. **Avoiding Subclass Proliferation**: Instead of creating numerous subclasses for each variation, prototype can be cloned with specific configurations.
4. **Prototype Instances Pool**: Maintaining a pool of prototype instances for eddicient object creation.

## Implementation Approach

1. **Design the Prototype Interface**: Create an interface or abstract class that declares the clone method.
2. **Implement ConcretePrototype**: Create concrete classes that implement the prototype interface and provide their own clonw method, allowing for specific copying logic.
3. **Client Usage**: Clients request clones from the prototype, specifying the desired type or configuration.
4. **Manage Prototype Instances**: Optionally, manage a pool of prototype instances to reuse existing instances when possible.

## Pros ans Cons

### Pros

1. **Flexibility**: Provides a flexible way to create new objects by copying existing ones, allowing for dynamic runtime configurations.
2. **Avoids Subclassing**: Reduces the need for creating numerous subclasses for different variations.
3. **Efficient Object Creation**: Can be more efficient than creating objects from scratch, expecially if the initialization process is resource-intensive.

### Cons

1. **Cloning Complex Objects**: Cloning might be challenging for objects with complex internal structures or dependencies.
2. **Shallow Copying Limitations**: Default clone operations often perform a shallow copy, which might not be suitable for deeply nested or complex objects.

## Relationship with Other Patterns

1. **Abstract Factory Pattern**: The Prototype Pattern can be used in combination with the Abstract Factory Pattern. Instead of creating new objects from scratch, an abstract factory can use prototype to create variations of objects.
2. **Singleton Pattern**: Prototypes can be used as a way to create multiple instances of a singleton object, providing flexibility while avoiding the limitations of a single instance.
3. **Builder Pattern**: The Prototype Pattern can be used in conjunction with the Builder Pattern to create complex objects by cloning simpler prototypes ans then modifying or confuguring them further.

---

In summary, the Prototype Pattern provides a way to create new objects by copying existing ones, offering flexibility and efficiency in certain scenarios. It is particularly useful when dealing with complex objects or when avoiding the creation of numerous subclasses for variations of objects.
