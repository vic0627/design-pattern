# Singleton pattern (單例模式)

> Singleton Pattern is a creational pattern that restricts the instantiation of a class to a single object and provides global access to that instance. It ensures that there is only one instance of a class throughout the application.

## Concept

The key concept of theSingleton Pattern is to have a class that is responsible for creating its own unique instance and providing a global point of access to that instance. It typivally involves vreating a private constructor to prevent external instantiation and a static method to provide access to the single instance.

## Application Scenarios

- When there should be only one instance of a class that needs to be shared by multiple parts of the system.
- When global access to an object is required, such as a database connection, thread pool, or configuration settings.
- When lazy initialization of the object is desired to improve performance or resource usage.

## Pros and Cons

### Advantages

1. Single instance: The Singleton Pattern ensures that there is only one instance of a class, providing a global point of access to it.
2. Global access: The single instance can be accessed globally, allowing different parts of the system to use it easily.
3. Lazy initialization: The Singleton can be lazily initialized, meaning that the instance is created only when it is first needed, improving performance and resource usage.
4. Thread safety: With proper implementation, the Singleton Pattern can provide thread-safe access to the single instance.

### Disadvantages

1. Global state: The use of a Singleton introduces global state into the application, which can make the code harder to test an maintain.
2. Tight coupling: Classes that depand on the Singleton become tightly coupled to it, which can make the code less flexible and harder to modify.
3. Hidden dependencies: The use of a Singleton can hide dependencies and make it harder to reason about the flow of data and control in the application.

---

Overall, the Single Pattern provides a way to ensure that there is only one instance of a class and enables global access to that instance. It is useful in scenarios where a single, shared resource needs to be managed throughout the application. However, it should be used judiciously, considering the potential drawbacks of global state and thght coupling.
