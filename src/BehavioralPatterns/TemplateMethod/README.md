# Template Method Pattern （模板方法模式）

## Concept

The Template Method Pattern is a behavioral design pattern that defines the skeleton of an algorithm in a method, deferring some steps to subclasses. It allows subclasses to redefine certain steps of an algorithm without changing the algorithm's structure, promoting code reuse and providing a way to implement variations of an algorithm.

## Structure and Components

![template-method](https://refactoringguru.cn/images/patterns/diagrams/template-method/structure-indexed.png)

- **AbstractClass**: Defines the template method, which is the algorithm's skeleton. It may also include abstract methods or default implemetations of certain steps.
- **ConcreteClass**: Implements the abstract methods defined in the AbstractClass to provide concrete implementations of the algorithm's steps.

## Application Scenarios

1. **Framework Design**: Useful in designing frameworks where certain steps of an algorithm are common across multiple implementations, but others may vary.
2. **Code Reuse**: Allows for code reuse by providing a common template for implementing algorithms, with the flexibility to override specific steps.
3. **Lifecycle Methods**: Commonly used in object lifecycle methods (e.g., initialization, cleanup) where certain steps are common across subclasses but may need customization.

## Implementation Approach

1. **Identify Common Steps**: Determine the common steps of the algorithm that will be included in the template method.
2. **Design AbstractClass**: Create an abstract class that defines the template method, including any abstract methods representing steps to be implemented by subclasses.
3. **Implement ConcreteClass**: Create concrete subclasses that extend the AbstractClass ans provide implementations for the abstract methods.
4. **Client Usage**: Clients use instances of ConcreteClass to execute the algorithm, relying on the template method to define the algorithm's structure.

## Pros and Cons

### Pros

1. **Code Reuse**: Promoting code reuse by providing a commmon template for implementing algorithms.
2. **Flexibility**: Allows for variations of an algorithm by letting subclasses override specific steps.
3. **Encapsulation**: Encapsulates the algorithm's structure in the template method, allowing subclasses to focus on implementing specific steps.

### Cons

1. **Inflexibility in Some Cases**: The template method may not be suitable if the algorithm's structure needs to vary significantly between subclasses.
2. **Potential for Tight Coupling**: Subclasses may become tightly coupled to the template method's implementation if there are many dependencies between steps.

## Relationship with Other Patterns

1. **Strategy Pattern**: The Template Method Pattern uses inheritance to implement variations of an algorithm, while the Strategy Pattern uses composition, allowing algorithms to be selected or changed dynamically at runtime.
2. **Factory Method Pattern**: The Factory Method Pattern is often used in conjunction with the Template Method Pattern. Factories may use a template method to define common steps for creating objects, with subclasses providing specific implementations for object creation.
