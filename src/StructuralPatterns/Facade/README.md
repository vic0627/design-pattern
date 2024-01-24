# Facade Pattern （外觀模式）

## Concept

The Facade Pattern is a structural design pattern that provides a unified interface to a set of interfaces in a subsystem.
It defines a higher-level interface that makes the subsystem easier to use by providing a simplified, single entry point.

## Structure and Components

![facade](https://refactoringguru.cn/images/patterns/diagrams/facade/structure-indexed.png)

- **Facade**: Provides a simplified interface to the subsystem. It delegates client requests to appropriate objects in the subsystem.
- **Subsystem Classes**: Classes that implement the functionality of the subsystem. These classes are not directly accessible to the client.
- **Client**: Initiates requests through the Facade, without needing to interact directly with the subsystem classes.

## Application Scenarios

1. **Complex System Simplification**: When you have a complex system with many components, and you want to provide a simplified interface to clients.
2. **Library or Frameworks**: Useful in libraries or frameworks where you want to expose only a subset of functionalities to the users.
3. **Lagecy System Integration**: When integrating a new system with an existing one, and you want to hide the complexities of the existing system.
4. **Managing Dependencies**: Provides a way to manage and minimized dependencies between client code and subsystem components.

## Implementation Approach

1. **Identify the Subsystem**: Identify the components that make up the subsystem and determine their interactions.
2. **Design the Facade**: Create a Facade class that provides a simple interface to the client and delegates the work to the subsystem classes.
3. **Define Subsystem Classes**: Implement the subsystem classes that contain the actual functionality of the system.
4. **Client Usage**: Clients use the Facade to interact with the subsystem, without needing to know the details of indiviual subsystem components.

## Pros and Cons

### Pros

1. **Simplified Client Interface**: Provides a simplified and unified interface to a complex system, making it easier for clients to use.
2. **Decoupling**: Encapsulates the subsystem, reducing dependencies between clients and subsystem components.
3. **Ease of Maintenance**: Changes in the Subsystem can be managed within the client Facade without affecting client code.

### Cons

1. **Limited Functionality Exposure**: Clients are limited to the functionalities provided by the Facade and may not have access to all capbilities of the subsystem.
2. **Rigidity**: If the subsystem changes frequently, the Facade might need to be updated, leading to maintenance challenges.

## Relationship with Other Patterns

1. **Adapter Pattern**: Facade and Adapter patterns are similar in that they both provide a different interface to an system. However, while Adapter is used to make existing classes work with others without modifying their source code, Facade is used to simplify a system's interface.
2. **Decorator Pattern**: A Facade might use the Decorator Pattern to add additional functionalities to the subsystem classes without modyfing their code directly.
3. **Singleton Pattern**: The Facade itself can be implemented as a Singleton to ensure a single point of access to the subsystem.

---

In summary, the Facade Pattern is valuable when dealing with complex systems by providing a simplified interface to clients, reducing dependencies, and encapsulating the intricacies of the subsystem. It promotes a clean and easy-to-use API for clients while managing the complexities internally.
