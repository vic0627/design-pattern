# Adapter Pattern (適配器模式)

> The **Adapter Pattern** is a structural design pattern that allows ibjects with incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces, enabling them to collaborate without needing to modifying their existing code. The Adapter Pattern converts the interface of one class into another interface that clients except, making them compatible and able to interact seamlessly.

## Concept

The main concept behind the Adapter Pattern is to wrap an wxisting class with a new interface, making it compatible with the client's requirements. This allows the client to work with the adapter object as if it were an interface of the target interface. The Adapter object then translates the client's requests into calls to the wrapped object, ensuring proper communication between the incompatible interfaces.

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

## Application Scenarios

- Integration of Legacy Systems: When we need to integrate new system or components with existing legacy systems that have incompatible interfaces. The adapter acts as a bridge between the new and old systems, allowing them to communicate.
- Reusability: When we want to reuse existing classes or components that do not have the desired interface. Instead of modifying the existing code, we can create an adapter that adapts the interface of the existing class to meet our requirements.
- Third-Party Libraries: When we want to use third-party libraries or components
that have different interfaces from what our application expects. The adapter helps to abstract the differences and provide a consistent interface for our application to work with.
