# Adapter Pattern (適配器模式)

> The **Adapter Pattern** is a structural design pattern that allows ibjects with incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces, enabling them to collaborate without needing to modifying their existing code. The Adapter Pattern converts the interface of one class into another interface that clients except, making them compatible and able to interact seamlessly.

## Concept

The main concept behind the Adapter Pattern is to wrap an existing class with a new interface, making it compatible with the client's requirements. This allows the client to work with the adapter object as if it were an interface of the target interface. The Adapter object then translates the client's requests into calls to the wrapped object, ensuring proper communication between the incompatible interfaces.

## Structure and Components

```text
+------------------+    +--------+
| interface Client |<---| Client |
| + method(data)   |    +--------+
+------------------+
        ^
        |
+--------------------+    +------------------------------+
| Adapter            |    | Service                      |
| - adaptee: Service |--->| ...                          |
| + method(data)     |    | + serviceMethod(specialData) |
+--------------------+    +------------------------------+
        |
        {
            specialData = convertToServiceFormat(data)
            return adaptee.serviceMethod(specialData)
        }
```

1. **Client 客戶端**
  The client is aclass that contains the current program's business logic.
2. **Client Interface 客戶端介面**
  The client interface decribes the protocol that other classes must follow when cooperating with the client code.
3. **Service 服務**
  The service includes serval functional classes (usually from third-party or legacy systems). The client is incompatible with their interface and cannot directly invoke their functionality.
4. **Adapter 適配器**
  The adapter is a class that can interact with both the client and the service: it implements the client interface while encapsulating the service object. The adapter accepts calls initiated by the client through the adapter interface and converts them into calls suitable for the encapsulated service object.

> The client code only needs to interact with the adapter through the interface, without being coupled to specific adapter classes. Therefore, you can add new types of adapters to the program without modifying existing code. This is useful when the interface of the service class is changed or replaced: you can create new adapter classes without modifying the client code.

## Application Scenarios

- Integration of Legacy Systems: When we need to integrate new system or components with existing legacy systems that have incompatible interfaces. The adapter acts as a bridge between the new and old systems, allowing them to communicate.
- Reusability: When we want to reuse existing classes or components that do not have the desired interface. Instead of modifying the existing code, we can create an adapter that adapts the interface of the existing class to meet our requirements.
- Third-Party Libraries: When we want to use third-party libraries or components
that have different interfaces from what our application expects. The adapter helps to abstract the differences and provide a consistent interface for our application to work with.

## Pros and Cons

### Advantages

1. Seamless integration: The adapter allows objects with incompatible interfaces to work together seamlessly, without the need for extenseive changes to the exitsting codebase.
2. Code Reusability: The adapter pattern allows us to reuse existing classes or components that otherwise would not be compatible with our system.
3. Flexibility: The adapter pattern provides flexibility by allowing us to introduce new functionality or components without impacting the existing codebase.

### Disadvantages

1. Increased Complexity: Introducing adapters adds an additional layer of complexity to the system, which may make it harder to understand and maintain.
2. Performance Overhead: The adapter may introduce some performance overhead due to the additional translation or mapping operations that need to be performed.
3. Limited Functionality: Depending on the complexity of the interfaces involved, the adapter may not be able to fully expose all the functionality of the wrapped object.

---

In summary, the Adapter Pattern is a design pattern that enables objects with incompatible interfaces to work together by providing a bridge or adapter between them. It is useful in scenarios where we need to integrate legacy systems, reuse existing code, or work with third-party libraries. While it offers advantages such as seamless integration and code reusability, it also introduces complexity and potential performance overhead.
