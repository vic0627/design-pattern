# Proxy Pattern （代理模式）

## Concept

The main concept behind the Proxy Pattern is to add a level of indirection between the client and the real object, providing a way to control and manage access to the object. The proxy object can be used to implement various behaviors such as lazy initialization, caching, access control, logging, and remote communication.

## Structure and Components

![proxy](https://refactoringguru.cn/images/patterns/diagrams/proxy/structure-indexed.png)

- **Service Interface**: The proxy must <sup>#</sup>adhere to Service Interface in order to <sup>#</sup>masquerade as a service.
- **Service**: The Service class provides some useful business logic.
- **Proxy**: The Proxy class contains a reference member variable pointing to the servie object. After perforiming its tasks (such as lazy initialization, logging, access control, and caching), the proxy passes the request to the service object.
  > Typically, the proxy manages the entire lifecycle of its service objects.
- **Client**: The Client can interact with the service or the proxy through the same interface, allowing you to use the proxy in any code that requires a service object.

## Application Scenarios

- **Virtual Proxies**: When we want to create expensive objects only when they are actually needed. The proxy object can create the real object on-demand, thereby improving performance.
- **Protection Proxies**: When we want to control access to sensitive or private objects. The proxy object can check the permissions or <sup>#</sup>credentials of the client before allowing access to the real object.
- **Remote Proxies**: When we want to provide a local representation of an object that <sup>#</sup>resides in a different address space or on a remote server. The proxy object can handle communication details and make remote calls <sup>#</sup>on behalf of the client.

## Implementation Approach

1. If there is no existing service interface, you need to create an interface to achieve the interchangeablility between the proxy and the service object. Extracting an interface from the service class is not always <sup>#</sup>feasible, as it requires modifying all clients of the service to use the interface. An alternative approach is to make the proxy a subclass of the service class, so that the proxy can inherit all the interfaces of the service.
2. Create a proxy class that includes a member variable storing a reference to the service. Typically, the proxy is responsible for creating the service and managing its entire lifecycle. In some special cases, the client may pass the service to the proxy through the constructor.
3. Implement the proxy methods based on the requirements. In most cases, the proxy should delegate the work to the service object after performing some tasks.
4. Consider creating a construction method to determine whether the client obtains the proxy or the actual service. You can create a simple static method in the proxy class or a complete factory method.
5. Consider implementing lazy initialization for the service object.

## Pros and Cons

### Pros

1. **Separation of Concerns**: The proxy object provides a clear separation between the client and the real object, allowing each to focus on their specific responsibilities.
2. **Enhanced Security**: The proxy object can add an extra layer of security by controlling access to the real object and performing authentication or authorization checks.
3. **Improved Performance**: The proxy object can <sup>#</sup>optimize the access to the real object by performing caching, lazy initialization, or other optimization techniques.

### Cons

1. **Increased Complexity**: Introducing a proxy object adds an additional of complexity to the system, which may make the codebase more diffcult to understand and maintain.
2. **Potential Overhead**: The proxy object can introduce some overhead due to the additional checks or operations it performs before delegating to real object. This overhead may impact performance.
3. **Limited Functionality**: Depending on the specific use case, the proxy object may not provide the full functionality to the real object. Some operations or features may not be available through the proxy.

## Relationship with other patterns

- The **Adapter** pattern provides a different interface for the wrapped object, while the **Proxy** pattern provides the same interface for the object. The **Decorator** pattern enhances the interface of the object.
- The **Facade** pattern and the **Proxy** pattern have similarities in that they both cache a complex entity and initialize it on their own. The Proxy and its service object adhere to the same interface, allowing them to be interchangeable, which is different from the Facade pattern.
- **Decorator** and **Proxy** have similar structures but serve different purpose. Both patterns are based on the composition <sup>#</sup>principles, which means that an object should delegate some of its work to another object. The difference lies in the fact that a Proxy usually manages the lifecycle of its service object, while the generation of a Decorator is always controlled by the client.

---

In summary, the Proxy Pattern is a design pattern that allows us to control access to an object by providing a surrogate or placeholder. It offers flexibility, security, and performance improvements, but it also introduces complexity and potential overhead. It is suitable for scenarios where we need to manage access to objects or add additional behaviors without modifying the existing code.

---

## Glossary

| words | pronunciation | definition |
| ----- | ------------- | ---------- |
| surrogate | /ˈsɝː.ə.ɡət/ | replacing someone else or used instead of something else |
| intercept | /ˌɪn.t̬ɚˈsept/ | to stop and catch something or someone before that thing or person is able to reach a particular place |
| adhere | /ədˈhɪr/ | to stick firmly |
| masquerade | /ˌmæs.kəˈreɪd/ | to pretend or appear to be |
| credential | /krɪˈden.ʃəl/ | a piece of information that is sent from one computer to another to check that a user is who they claim to be or to allow someone to see information |
| reside (in sth) | /rɪˈzaɪd/ | if a power or quality resides in someone or something, the person or thing has that power or quality |
| on behalf of someone | -- | representing |
| feasible | /ˈfiː.zə.bəl/ | able to be made, done, or achieved |
| optimize | /ˈɑːp.tə.maɪz/ | to make something as good as possible |
| principle | /ˈprɪn.sə.pəl/ | a basic idea or rule that explains or control how something happens or works |
