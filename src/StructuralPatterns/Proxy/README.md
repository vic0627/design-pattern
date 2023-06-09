# Proxy Pattern (代理模式)

> Proxy Pattern is a Structural design pattern that provides a surrogate or placeholder for another object to control access to it. In other words, it allows us to create a proxy object that acts as a subtitle for the real object. The proxy object can intercept requests from the client and perform additional tesks before or after forwarding the request to the real object.

## Concept

The main concept behind the Proxy Pattern is to add a level of indirection between the client and the real object, providing a way to control and manage access to the object. The proxy object can be used to implement various behaviors such as lazy initialization, caching, access control, logging, and remote communication.

## Application Scenarios

- Virtual Proxies: When we want to create wxpensive objects only when they are actually needed. The proxy object can create the real object on-demand, thereby improving performance.
- Protection Proxies: When we want to control access to sensitive or private objects. The proxy object can check the permissions or credentials of the client before allowing access to the real object.
- Remote Proxies: When we want to provide a local representation of an object that resides in a different address space or on a remote server. The proxy object can handle communication details and make remote calls on behalf of the client.

## Pros and Cons

### Advantages

1. Separation of Concerns: The proxy object provides a clear separation between the client and the real object, allowing each to focus on their specific responsibilities.
2. Enhanced Security: The proxy object can add an extra layer of security by controlling access to the real object and performing authentication or authorization checks.
3. Improved Performance: The proxy object can optimize the access to the real object by performing caching, lazy initialization, or other optimization techniques.

### Disadvantages

1. Increased Complexity: Introducing a proxy object adds an additional of complexity to the system, which may make the codebase more diffcult to understand and maintain.
2. Potential Overhead: The proxy object can introduce some overhead due to the additional checks or operations it performs before delegating to real object. This overhead may impact performance.
3. Limited Functionality: Depending on the specific use case, the proxy object may not provide the full functionality to the real object. Some operations or features may not be available through the proxy.

---

In summary, the Proxy Pattern is a design pattern that allows us to control access to an object by providing a surrogate or placeholder. It offers flexibility, security, and performance improvements, but it also introduces complexity and potential overhead. It is suitable for scenarios where we need to manage access to objects or add additional behaviors without modifying the existing code.
