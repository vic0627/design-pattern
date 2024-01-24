# Chain of Responsibility Pattern （責任鏈模式）

## Concept

The main concept behind the Chain of Responsibility pattern is to create a chain of handler objects, where each handler has a reference to the next handler in the chain. When a request is made, it is passed through the chain until a handler is found that can handle the request. Each handler decides whether to handle the request or pass it to the next handler in the chain.

## Structure and Components

![chain-of-responsibility](https://refactoringguru.cn/images/patterns/diagrams/chain-of-responsibility/structure-indexed.png)

- **Handler**: The Handler declares the common interface for all concrete handlers. This interface typically includes a single method for request handling, but sometimes it may also include a method for setting the next handler in the chain.
- **Base Handler**: The Base Handler is an optional class where you can place the shared code among handlers. Typically, this class defines a member variable to hold a reference to the next handler in the chain. The client can create the chain by passing handlers to the constructor or setter method of the previous handler. This class can also implement default handling behavior by checking if the next handler exists before passing the request to it.
- **Concrete Handlers**: The Concrete Handlers contain the actual code for handling requests. Each handler, upon receiving a request, must decide whether to handle it and whether to pass it along the chain. Handlers are typically independent and immutable, requiring all necessary data to be provided through their contructor.
- **Client**: The Client can generate the chain of handlers either statically or dynamically based on the program logic. It's important to note that a request can be sent to any handler in the chain, not necessarily the first one.

## Application Scenarios

1. **Request Processing**: When there are multiple processing steps or stages involved in handling a request, and each step can be handled by different object in the chain.
2. **Event Handling**: When events need to be processed by multiple event handlers in a specific order or hierarchy.
3. **Logging and Error Handling**: When different loggers or error handlers can handle log messages or errors based on their severity ot type.

## Pros and Cons

### Pros

1. **Flexibility and Extensibility**: It allows new handlers to be added or existing handlers to be modified without affecting the client code or the other parts of the system.
2. **Decoupling**: It decouples the sender of the request from the receiver, promoting a mor flexible and maintainable codebase.
3. **Dynamic Handling**: The specific handler in the chain can be determined dynamically at runtime, providing more flexibility in handling requests.

### Cons

1. **Unhandled Requests**: If the chain is not properly configured or there is no handler capable of handling the request, it may go unhandled, leading to potential issues or errors.
2. **Performance Impact**: The request may need to traverse the entire chain before being handled, which can introduce some performance overhead.
3. **Complex Configuration**: Configuring the chain and ensuring the correct order and hierarchy of handlers can be complex, especially in larger systems.

## Relationship with Other Patterns

- The **Chain of Responsibility**, **Command**, **Mediator**, and **Observer** patterns address various ways of connecting senders and receivers of requests:
  - The Chain of Responsibility passes a request along a chain of potential receivers until one of them handles it.
  - The Command estiablishes unidirectional connections between senders and receivers.
  - The Mediator eliminates direct connections between senders and receivers, forcing them to communicate indirectly through a mediator object.
  - The Observer allows receivers to dynamically subscribe or unsubscribe to receive requests.
- The **Chain of Responsibility** is often used with the **Composite** pattern. In this case, a leaf component can pass a request along the chain containing all the parent components of the object tree.
- The manager of a **Chain of Responsibility** can be implemented using the **Command** pattern. In this case, you can execute various operation on the same context object represented by the request.
  There is another way to implement it where the request itself is a command object. In this case, you can execute the same operation on a chain of different context objects connected by the chain.
- The class structures of the **Chain of Responsibility** and **Decorator** patterns are very similar. Both rely on recursive composition to pass the operation that needs to be performed to a series of objects. However, there are serveral important differences between them.
  The manager of the **Chain of Responsibility** can independently perform any operation and can stop passing the request at any time. On the other hand, various decorators can extend the behavior of an object while adhering to the basic interface. Additionally, decorators cannot interrupt the passing of requests.

---

In summary, the Chain of Responsibility pattern allows objects to pass requests along a chain of potential handlers, providing a flexible and dynamic way of handling requests. It promotes loose coupling and extensibility but requires careful configuration and may introduce performance overhead. It is suitable for scenarios where multiple objects can handle a request, and the specific handler is determined at runtime.
