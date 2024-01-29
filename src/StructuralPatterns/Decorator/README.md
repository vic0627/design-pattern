# Decorator Pattern （裝飾器模式）

## Concept

The Decorator Pattern is a structural design pattern that allows behavior to be added to an indiviual object, either statically or dynamically, without affecting the behavior of other objects from the same class. It is a flexible alternative to subclassing for extending functionalities.

## Structure and Components

![decorator](https://refactoringguru.cn/images/patterns/diagrams/decorator/example.png)

- **Component**: Defines the interface for objects that can have responsibilities added to them dynamically.
- **Concrete Component**: Implements the Component interface and defines the base behavior.
- **Decorator**: Maintains a reference to a Component object and conforms to the Component interface, adding additional responsibilities.
- **Concrete Decorator**: Extends the functionality of the Component by adding new responsibilities.

## Application Scenarios

1. **Extending Behavior**: When you need to add new functionalities to objects without altering their existing code.
2. **Dynamic Composition**: Allows for dynamic composition of behaviors at runtime.
3. **Open/Closed Principle**: The Decorator Pattern supports the Open/Closed Principle, enabling the extension of classes without modifying their source code.
4.**Combining Features**: Combining different features or variations of features in a flexible and reusable way.

## Implementation Approach

1. **Identify the Component Interface**: Define an interface or abstract class that represents the base component.
2. **Create Concrete Component**: Implement the base component with its core functionality.
3. **Define Decorator Interface**: Create an interface or abstract class for decorators that extends the Component interface.
4. **Create Concrete Decorators**: Implement concrete decorator classes, each adding specific responsibilities while delegating to the wrapped Component.
5. **Client Usage**: Clients can use the base component or any combination of decorators to achieve the desired functionality.

## Pros and Cons

### Pros

1. **Flexibility**: Allows for dynamic and flexible addition of responsibilities to objects.
2. **Open/Closed Principle**: Supports the Open/Closed Principle, enabling the extension of classes without modifying their existing code.
3. **Composition over Inheritance**: Provides an alternative to subclassing for extending functionalities, promoting code reuse.

### Cons

1. **Complexity**: The use of multiple decorators can lead to a complex hierarchy of objects.
2. **Order of Decoration**: The order in which decorators are applied can impact the final behavior.

## Relationship with Other Patterns

1. **Adapter Pattern**: Decorator and Adapter patterns share some similarties, but the key difference is their intent. While Decorator is focuses on adding resposibilities to an object, Adapter is focuses on allowing incompatible interfaces to work together.
2. **Composite Pattern**: Decorator and Composite patterns are often used together. A component in the Composite pattern can be decorated withe additional resposibilities using the Deocrator pattern.
3. **Strategy Pattern**: The Decorator Pattern can be seen as a specific implementation of the Strategy Pattern, where strategies can be dynamically added or changed at runtime.

---

In summary, the Decorator Pattern provides a flexible and dynamic way to extend the behavior of objects without altering their existing code. It promotes code reuse, supports the Open/Closed Pricinple, and allows for the dynamic composition of features at runtime.
