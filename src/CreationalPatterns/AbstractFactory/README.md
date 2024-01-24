# Abstract Factory Pattern （抽象工廠模式）

## Concept

The main concept behind the Abstract Factory Pattern is to encapsulate the creation of objects into a factory object or a family of factory objects. Each factory is responsible for creating a specific family of related objects. The client code interacts with the abstract factory interface to create objects, and the factory decides which concrete implementation to instantiate.

## Structure and Components

![abstract-factory](https://refactoringguru.cn/images/patterns/diagrams/abstract-factory/structure-indexed.png)

- **Abstract Product**: The Abstract Product declares an interface for a group of different but related products that form a product series.
- **Concrete Product**: The Concrete Product is the implementation of various types of the Abstract Product. All variants must implement the corresponding Abstract Product.
- **Abstract Factory**: The Abstract Factory interface declares s set of methods for creating various abstract products.
- **Concrete Factory**: The Concrete Factory implements the construction methods of the Abstract Factory. Each concrete factory corresponds to a specific product variant and only creates that variant.

Although the concrete factory initializes the concrete products, the signature of its construction methods must return the corresponding abstract product. This way, the client code that uses the factory is not coupled to specific product variant created by the factory. The client only needs to interact with the factory and product objects through the abstract interface to work with any concrete factory/product variant.

## Application Scenarios

The Abstract Factory Pattern is useful in scenarios where there are multiple families of related objects, and the client code needs to work with these objects interchangeably. It provides a way to ensure that the objects created are compatible with each other, as they are all part of the same family.

Some common use cases for the Abstract Factory Pattern include:

- Creating platform-independent UI components: The abstract factory can provide a way to create UI components such as buttons, text fields, and checkboxes that are compatible with different platforms (e.g., Windows, macOS, Linux).
- Database abstraction: The abstract factory can be used to create database connection objects and query objects that are specific to different database systems (e.g., MySQL, PostgreSQL, Oracle).
- Plugin architecture: The abstract factory can be used to create plugin objects or modules that adhere to a specific interface, allowing the system to load and use different plugins dynamically.

## Implementation Approach

1. Create a matrix with different product types and product variants as dimensions.
2. Declare an abstract product interface for all products. Then have all concrete product classes implement these interfaces.
3. Declare an abstract factory interface that provides a set of construction methods for all abstract products.
4. Implement a concrete factory class for each product variant.
5. Develop initialization code in the application. This code initializes a specific concrete factory class based on application configuration or the current environment. Then, pass the factory object to all classes that need to create products.
6. Identify all direct calls to product constructions in the code and replace them with calls to the corresponding construction methods in the factory object.

## Pros and Cons

### Pros

1. **Encapsulation of object creation**: The client code is decoupled from the specific implementations of objectd. It can work with different families of objects without knowing their concrete classes.
2. **Ensures product compatibility**: The abstract factory ensures that the objects creaaed are compatible with each other, as they are part of the same family. This helps in maintaining a consistent and <sup>#</sup>cohesive system.
3. **Provides flexibility**: It allows for easy swapping of different families of objects by changing the concrete factory implementation. This promotes flexibility and extensibility.

### Cons

1. **Increased complexity**: The introduction of abstract factories and multiple related object families can make the codebase more complex and harder to understand.
2. **Limited scalability**: Adding new object families or variations may require modifying the existing abstract factory interface and all its concrete implementations. This can become <sup>#</sup>cumbersome as the number of object families grows.
3. **Higher development effort**: Implementing the abstract factory and the related object families requires additional development effort upfront. It may not be suitable for simple or small-scale applications where the benefits may not <sup>#</sup>outweigh the added complexity.

## Relationship with Other Patterns

- **Factory Method** pattern is often used at the initial stages of a design when the creation process is relatively simple and can be conveniently customized through subclasses. It then evolves into using **Abstract Factory** pattern, **Prototype**, or **Builder** pattern, which offer more flexibility but are more complex.
- **Builder** pattern focuses on step-by-step creation of complex objects. **Abstract Factory**, on the other hand, is specifically designed to produce a series of related objects. Abstract Factory immediately returns the products, while Builder allows you to perform additional construction steps before obtaining the product.
- **Abstract Factory** pattern is often based on a set of **factory methods**, but you can also user **Prototype** pattern to generate these methods for the classes.
- When you only need to hide the way objects are created from the client code, you can use **Abstract Factory** as an alternative to the **Facade** pattern.
- **Abstract Factory** can be combined with the **Bridge** pattern. This combination is useful when the abstraction defined by the Bridge can only work with a specific implementation. In such cases, Abstract Factory can encapsulate these relationships and hide their complexity from client code.
- **Abstract Factory**, **Builder**, and **Prototype** patterns can all be implemented using the **Singleton** pattern.

---

In summary, the Abstract Factory Pattern provides a way to create families of related objects without specifying their concrete classes. It promotes encapsulation, compatibility, and flexibility. It is suitable for scenarios where there are multiple families of objects and the client code needs to work with them interchangeably. However, it may introduce complexity and require additional development effort.

---

## Glossary

| words | pronunciation | definition |
| ----- | ------------- | ---------- |
| cohesive | /koʊˈhiː.sɪv/ | united and working together effectively |
| cumbersome | /ˈkʌm.bɚ.səm/ | awkward because of being large, heavy, or not effective |
| outweigh | /ˌaʊtˈweɪ/ | to be greater or more important than something else |
