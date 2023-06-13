# Abstract Factory Pattern (抽象工廠模式)

> The **Abstract Factory Pattern** is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes. It allows the client code to create objects without having to know the specific implementation details.

## Concept

The main concept behind the Abstract Factory Pattern is to encapsulate the creation of objects into a factory object or a family of factory objects. Each factory is responsible for creating a specific family of related objects. The client code interacts with the abstract factory interface to create objects, and the factory decides which concrete implementation to instantiate.

## Structure and Components

```text
                                +------------------------------+
                                | ConcreteFactory1             |
    ┌---------------┌-----------| ...                          |
    |               |           | + createProductA(): ProductA |
    v               v           | + createProductB(): ProductB |
+-----------+   +-----------+   +------------------------------+
| Concrete  |   | Concrete  |                   |
| PruductA1 |   | PruductB1 |                   |
+-----------+   +-----------+                   |
    |               |                           |
    v               v                           v                   +------------------------------+ 
+----------+    +----------+    +------------------------------+    | Client                       |
| Abstract |    | Abstract |    | interface AbstractFactory    |<---| - factory: AbstractFactory   |
| ProductA |    | ProductB |    | + createProductA(): ProductA |    | + Client(f: AbstractFactory) |
+----------+    +----------+    | + createProductB(): ProductB |    | + someOperation()            |
    ^               ^           +------------------------------+    +------------------------------+
    |               |                           ^                       |
+-----------+   +-----------+                   |                       {
| Concrete  |   | Concrete  |                   |                           ProductA pa = factory.createProductA()
| PruductA2 |   | Pruductb2 |                   |                       }
+-----------+   +-----------+   +------------------------------+        
    |               |           | ConcreteFactory2             |
    └---------------└-----------| ...                          |
                                | + createProductA(): ProductA |----{
                                | + createProductB(): ProductB |        return new ConcreteProductA2()
                                +------------------------------+    }
```

- **Abstract Product 抽象產品**
  The Abstract Product declares an interface for a group of different but related products that form a product series.
- **Concrete Product 產品實體**
  The Concrete Product is the implementation of various types of the Abstract Product. All variants (Victorian/Modern) must implement the corresponding Abstract Product (Chair/Sofa).
- **Abstract Factory 抽象工廠**
  The Abstract Factory interface declares s set of methods for creating various abstract products.
- **Concrete Factory 工廠實體**
  The Concrete Factory implements the construction methods of the Abstract Factory. Each concrete factory corresponds to a specific product variant and only creates that variant.

> Although the concrete factory initializes the concrete products, the signature of its construction methods must return the corresponding abstract product. This way, the client code that uses the factory is not coupled to specific product variant created by the factory. The client only needs to interact with the factory and product objects through the abstract interface to work with any concrete factory/product variant.

## Application Scenarios

The Abstract Factory Pattern is useful in scenarios where there are multiple families of related objects, and the client code needs to work with these objects interchangeably. It provides a way to ensure that the objects created are compatible with each other, as they are all part of the same family.

Some common use cases for the Abstract Factory Pattern include:

- Creating platform-independent UI components: The abstract factory can provide a way to create UI components such as buttons, text fields, and checkboxes that are compatible with different platforms (e.g., Windows, macOS, Linux).
- Database abstraction: The abstract factory can be used to create database connection objects and query objects that are specific to different database systems (e.g., MySQL, PostgreSQL, Oracle).
- Plugin architecture: The abstract factory can be used to create plugin objects or modules that adhere to a specific interface, allowing the system to load and use different plugins dynamically.

## Pros and Cons

### Advantages

1. Encapsulation of object creation: The client code is decoupled from the specific implementations of objectd. It can work with different families of objects without knowing their concrete classes.
2. Ensures product compatibility: The abstract factory ensures that the objects creaaed are compatible with each other, as they are part of the same family. This helps in maintaining a consistent and cohesive system.
3. Provides flexibility: It allows for easy swapping of different families of objects by changing the concrete factory implementation. This promotes flexibility and extensibility.

### Disadvantages

1. Increased complexity: The introduction of abstract factories and multiple related object families can make the codebase more complex and harder to understand.
2. Limited scalability: Adding new object families or variations may require modifying the existing abstract factory interface and all its concrete implementations. This can become cumbersome as the number of object families grows.
3. Higher development effort: Implementing the abstract factory and the related object families requires additional development effort upfront. It may not be suitable for simple or small-scale applications where the benefits may not outweigh the added complexity.

---

In summary, the Abstract Factory Pattern provides a way to create families of related objects without specifying their concrete classes. It promotes encapsulation, compatibility, and flexibility. It is suitable for scenarios where there are multiple families of objects and the client code needs to work with them interchangeably. However, it may introduce complexity and require additional development effort.
