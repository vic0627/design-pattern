# Strategy Pattern (策略模式)

> Strategy Pattern is a behavioral design pattern that enables an object to dymaically change its behavior at runtime by encapsulating a set of algorithms and making them interchangeable. It allows the algorithms to vary independently from the clients that use them.

## Concept

The key concept of the Strategy Pattern is the separation of behavior (algorithms) from the context (object using the algorithms). It promotes composition over inheritance and enables the clients to choose the algorithm dynamically without tightly coupling them to specific implementations.

## Application Scenarios

- When multiple algorithms or strategies are available for solving a problem, and the client needs the flexibility to switch between them at runtime.
- When there is a need to isolate the algorithm implementation details from the client code.
- When a class has multiple conditional statements that can be replaced with different strategies.

## Pros and Cons

### Adventages

1. Encapsulates algorithms: The strategy pattern encapsulates different algorithms or strategies, making them easily interchangeable.
2. Promotes code reuse: Strategies can be reused across different contexts without modifying the client code.
3. Enables runtime flexibility: The client can switch between strategies dynamically at runtime without affecting the overall system behavior.
4. Simplifies maintenance: Adding or modifying strategies does not require changes to the client code, which simplifies maintenance and reduces the risk of introducing bugs.

### Disadvantages

1. Increased number of classes: Implementing the strategy pattern may lead to an increased number of classes, especially when there are many strategies involved.
2. Potential performance impact: The strategy pattern may introduce overhead due to the additional layer of abstraction and indirection.

---

Overall, the Strategy Pattern provides a flexible and reusable way to manage algorithms and behaviors in an object-oriented system. It promotes code flexibility, extensibility, and maintenance ease. However, it should be used judiciously, considering the trade-offs in terms of code complexity and performance.
