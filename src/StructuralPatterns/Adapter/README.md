# Adapter Pattern (適配器模式)

> The **Adapter Pattern** is a structural design pattern that allows objects with ^#^incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces, enabling them to ^#^collaborate without needing to modifying their existing code. The Adapter Pattern converts the interface of one class into another interface that clients except, making them ^#^compatible and able to interact ^#^seamlessly.

## Concept

The main concept behind the Adapter Pattern is to wrap an existing class with a new interface, making it compatible with the client's requirements. This allows the client to work with the adapter object as if it were an interface of the target interface. The Adapter object then translates the client's requests into calls to the wrapped object, ensuring ^#^proper communication between the incompatible interfaces.

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

- **Client 客戶端**
  The client is a class that contains the current program's business logic.
- **Client Interface 客戶端介面**
  The client interface describes the ^#^protocol that other classes must follow when working with the client code.
- **Service 服務**
  The service ^#^consists of several ^#^utility classes, often coming from third-party or ^#^_legacy systems_. The client is incompatible with their interface, making it unable to directly ^#^invoke their functionality.
- **Adapter 適配器**
  The adapter is a class that can interact with both the client and the service. It implements the client interface while encapsulating the service object. The adapter receives calls initiated by the client through the adapter interface and converts them into calls that are suitable for the encapsulated service object.

> The client code only needs to interact with the adapter through the interface, without coupling to specific adapter classes. This allows adding new types of adapters to the program without modifying existing code. It is particularly useful when the interface of the service class is changed or replaced: you can create new adapter classes without modifying the client code.

## Application Scenarios

- Integration of Legacy Systems: When we need to ^#^integrate new system or components with existing legacy systems that have incompatible interfaces. The adapter acts as a bridge between the new and old systems, allowing them to communicate.
- Reusability: When we want to reuse existing classes or components that do not have the desired interface. Instead of modifying the existing code, we can create an adapter that adapts the interface of the existing class to meet our requirements.
- Third-Party Libraries: When we want to use third-party libraries or components
that have different interfaces from what our application expects. The adapter helps to abstract the differences and provide a consistent interface for our application to work with.

## Implementation Approach

1. Ensure that there are at least two classes with incompatible interfaces:
   - One is a functional service class that cannot be modified (usually a third-party, legacy system, or a class with multiple existing dependencies).
   - One or more client classes that would benefit from using the service class.
2. Declare a client interface that describes how the client interacts with the service.
3. Create an adapter class that ^#^conforms to the client interface. Initially, all methods in the adapter class are empty.
4. Add a member variable in the adapter class to store a reference to the service object. Typically, this member variable is initialized through the constructor, but sometimes passing it to the adapter when calling its methods might be more convenient.
5. Implement all the methods of the client interface in the adapter class. The adapter will ^#^delegate the actual work to the service object while being responsible for interface or data format ^#^conversion.
6. Clients must use the adapter through the client interface. This way, you can modify or extend the adapter without affecting the client code.

## Pros and Cons

### Advantages

1. Seamless Integration: The adapter allows objects with incompatible interfaces to work together seamlessly, without the need for extensive changes to the existing codebase.
2. Code Reusability: The adapter pattern allows us to reuse existing classes or components that otherwise would not be compatible with our system.
3. Flexibility: The adapter pattern provides flexibility by allowing us to introduce new functionality or components without impacting the existing codebase.

### Disadvantages

1. Increased Complexity: Introducing adapters adds an additional layer of complexity to the system, which may make it harder to understand and maintain.
2. Perfarmance Overhead: The adapter may introduce some performance ^#^overhead due to the additional translation or mapping operations that need to be performed.
3. Limited Functionality: Depending on the complexity of the interfaces ^#^involved, the adapter may not be able to fully expose all the functionality of the wrapped object.

## Relationship with Other Patterns

- The Bridge pattern is often designed ^#^up-front, letting you develop parts of an application independently of each other. On the other hand, the Adapter pattern is commonly used with an existing application to make incompatible classes work together effectively.
- An Adapter can alter an existing object's interface, while a Decorator enhances an object's functionality without changing its interface. In addition, Decorators support ^#^recursive composition, but Adapters cannot.
- Adapters provide a different interface to the wrapped objects, Proxy provides the same interface, and Decorators provide an enhanced interface.
- The Facade pattern defines a new interface for existing objects, ^#^whereas the Adapter pattern tries to make the existing interface usable. Adapters usually wrap a single object, while Facades often work with an entire subsystem of objects.
- The interfaces of objects in the Bridge, State, and Strategy patterns can be very similar. In fact, they can all be based on the same ^#^underlying abstraction, the Composition pattern. However, they solve different problems. A pattern is not just a recipe for organizing code in a specific way; it can also communicate to other developers the problem the pattern solves.

---

In summary, the Adapter Pattern is a design pattern that enables objects with incompatible interfaces to work together by providing a bridge or adapter between them. It is useful in scenarios where we need to integrate legacy systems, reuse existing code, or work with third-party libraries. While it offers advantages such as seamless integration and code reusability, it also introduces complexity and potential performance overhead.

---

## Glossary

| words | pronunciation | definition |
| ----- | ------------- | ---------- |
| compatible | /kəmˈpæt̬.ə.bəl/ | able to exist, live together, or work successfully with something or someone else |
| incompatible | /ˌɪn.kəmˈpæt̬.ə.bəl/ | not able to exist or work with another person or thing because of basic differences |
| collaborate | /kəˈlæb.ə.reɪt/ | to work with someone else for a special purpose |
| seamless | /ˈsiːm.ləs/ | happenong without any sudden changes, interruption, or diffculty |
| seamlessly | /ˈsiːm.ləs.li/ | ^ |
| proper | /ˈprɑː.pɚ/ | real, satisfactory, suitable, or correct |
| protocol | /ˈproʊ.t̬ə.kɑːl/ | a computer language allowing computers that are connected to each other to communicate |
| consist (of) | /kənˈsɪst/ | to be made of or formed from something |
| consistent | /kənˈsɪs.tənt/ | always behaving or happening in a similar, especially postive, way |
| utility | /juːˈtɪl.ə.t̬i/ | a service that is used by the public, such as an electricity or gas supply or a train service |
| legacy system | -- | an old method, technology, computer system; or application program |
| invoke | /ɪnˈvoʊk/ | to make someone have a particular felling or remember something |
| integrate | /ˈɪn.t̬ə.ɡreɪt/ | to mix with and join society or a group of people, often changing to suit their way of life, habits, and customs |
| conform | /kənˈfɔːrm/ | to behave according to the usual standards of behaviour that are expected by a group or society |
| delegate | /ˈdel.ə.ɡət/ | to give a particular job, duty, right, etc. to someone else so that they do it for you |
| conversion | /kənˈvɝː.ʃən/ | the process of converting something from one thing to another |
| overhead | /ˈoʊ.vɚ.hed/ | any combination of excess or indirect computation time, memory, bandwidth, or other resources that are required to perform a specific task. |
| involve | /ɪnˈvɑːlv/ | 1. If an activity, situation, etc. involves something, that thing is a part of the activity, etc. 2. If a situation involves someone or something, he, she, or it is affected by it. 3. to include someone in something, or to make them take part in or feel part of it  |
| up-front | -- | at the front; in front |
| recursive | /rɪˈkɝː.sɪv/ | involving doing or saying the same thing several times in order to produce a particular result or effect |
| whereas | /werˈæz/ | compared with the fact that; but |
| underlying | /ˌʌn.dɚˈlaɪ.ɪŋ/ | not obvious; based on; under; |
