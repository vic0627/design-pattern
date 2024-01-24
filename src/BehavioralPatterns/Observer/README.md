# Observer Pattern （觀察者模式）

## Concept

The main concept behind the Observer Pattern is to decouple the subject and observers, allowing them to vary indenpendently. The subject maintains a list of observers and provides methods to add or remove observers. The observers register thenselves with the subject and receive updates whenever there is a change in the subject's state.

## Structure and Components

![observer](https://refactoringguru.cn/images/patterns/diagrams/observer/structure-indexed.png)

- **Publisher**: A Publisher sends events of interest to other objects. The events <sup>#</sup>occur when the Publisher's own state changes or specific actions are performed. The Publisher includes a <sup>#</sup>subscription framework that allows new subscribers to join and current subscribers to leave the list.
  When a new event occurs, the Publisher <sup>#</sup>iterates through the subscription list and invokes the notify method of each subscriber object. This method is declared in the Subscriber interface.
- **Subscriber**: The Subscriber interface declares the notification interface. In most cases, this interface only contains an update method. The method can have multiple parameters, allowing the Publisher to pass details information about the event during updates.
- **Concrete Subscriber**: Concrete Subscribers can perform operations in response to the publisher's notifications. All Concrete Subscriber classes implement the same interface, so the Publisher does not need to be coupled with specific classes.
  Subscribers often require some <sup>#</sup>contextual information to handle updates correctly. Therefore, the Publisher typically passes some contextual data as parameters to the notify method. The Publisher can also pass itself as a parameter, allowing Subscribers to directly access the required data.
- **Client**: The Client creates Publisher and Subscriber objects separately and registers the Publisher updates with the Subscribers.

## Application Secenarios

- **Event Handling**: When we want to notify multiple objects about the <sup>#</sup>occurrence of an event. The subject can act as an event source, and the observers can be event listeners that react to the event.
- **Model-View-Controller (MVC) Architectural Pattern**: In the MVC pattern, the observer pattern is often used to ensure that the views are automatically updated when the model changes. The model represents the Subject, and the views represent the observers.
- **Pub-Sub System**: When we have a publish-subscribe system where publishers and subscribers need to communicate with each other. The subject acts as the publisher, and the Observers act as subscribers who receive updates.

## Implementation Approach

1. Carefully <sup>#</sup>examine your business logic and try to split it into two parts: the core functionality that is independent of other code will serve as the publisher, while the rest of the code will be transformed into a set of subsciber classes.
2. Declare the subscriber interface. This interface should at least declare an `update` method.
3. Declare the publisher interface and define some methods to add and remove subscriber objects from a list. Remember that publishers should only interact with subscribers through the subscriber interface.
4. <sup>#</sup>Determine the location to store the actual list of subscribers and implement the subscription method. Typically, all types of publisher code look the same, so it is <sup>#</sup>evident to place the list in an abstract class that directly extends the publisher interface. Concrete publishers will extend this class and inherit all the subscription behavior. *However, if you need to apply this pattern in an existing class hierarchy, you can consider using composition: place the subscription logic into a separate object and have all actual subscribers use that object.*
5. Create concrete publisher classes. Each time an important event occurs in the publisher, it must notify all subscribers.
6. Implement the notification update method in concrete subscriber classes. Most subscribers require some contextual data related to the event. This data can be passed as parameters to the notification method. *But there is another option. Subscribers can receive the notification and directly retrieve all the data from it. In this case, the publisher must pass itself through the update method. Another less flexible way is to <sup>#</sup>permanently connect the publisher and subscriber through the constructor.*
7. The client must generate all the required subscribers and register them with the <sup>#</sup>corresponding publishers.

## Pros and Cons

### Pros

1. **Loose Coupling**: The subject and observers are loosely coupled, allowing them to evolve independently. They are not tightly depentent on each other, which improves maintainability and reusability.
2. **Extensibility**: It's easy to add observers without modifying the subject. The subject doesn't need to know the specific types of observers, making it flexible to <sup>#</sup>accommodate new obdervers in the furture.
3. **Modularity**: The Oberver Pattern promotes modularity by separating the subject and observers into <sup>#</sup>distinct objects. This enhances code organization and makes it easier to understand and modify.

### Cons

1. **Unexpected Updates**: Observers may receive updates even when they are not intrested in certain changes. This can lead to unnecessary updates and potentially impact performance.
2. **Ordering of Notifications**: The order in which observers receive notifications may be <sup>#</sup>non-deterministic. If the order of notifications is important, additional mechanisms may be needed to enforce a specific order.
3. **Memory Leaks**: If observers are not properly removed from the subject, they can cause memory leaks, as the subject keeps references to the observers even when they are no longer needed.

## Relationship with Other Patterns

- The **Chain Responsibility**, **Command**, **Mediator**, and **Observer** patterns deal with different ways of connecting senders and receievers:
  - The Chain of Responsibility passes a request along a chain of potential receivers until one of them handles the request.
  - The Command establishes unidirectional connections between senders and recievers.
  - The Mediator eliminates direct connections between senders and recievers, forcing them to communicate indirectly through a mediator object.
  - The Observer allows recievers to dynamically subscribe or unsubscribe to recieve requests.
  - It's often hard to decide which pattern to use since they can all be used to implement similar distibuted communication structures. However, there are some <sup>#</sup>subtle differences that you should be aware of.
- The main goal of the **Mediator** pattern is to eliminate direct dependencies between communicating components, they all depend on a single mediator object. The **Observer**'s goal is to establish dynamic one-way connections between objects, where some objects act as <sup>#</sup>subordinates of others.
  - One popular way to implement the Mediator pattern relies on the Observer pattern. The Mediator object acts as a publisher, while other components act as subscribers that can subscribe to or unsubscribe from the events of the mediator. When the Mediator is implemented this way, it may appear very similar to the Observer pattern.
  - When in doubt, remember that there are other ways to implement the Mediator pattern. For example, you can permanently link all components to the same mediator object. The implementation would be different from the Observer pattern, but it would still be a form of the Mediator pattern.
  - Imagine a program where all components become publishers, and they can establish dynamic connections with each other. In this case, the program doesn't have a centralized mediator object, but rather a distibuted set if observers.

---

In summary, the Observer Pattern is a design pattern that establishs a dependency between a subject and multiple observers. It allows for loose coupling, extensibility, and modularity. It is suitable for scenarios where objects need to be notified of changes in another object's state without tightly coupling them together.

---

## Glossary

| words | pronunciation | definition |
| ----- | ------------- | ---------- |
| occur | /əˈkɝː/ | (especially of accidents and other unexpected events) to happen |
| occurrence | /əˈkɝː.əns/ | something that happens |
| subscription | /səbˈskrɪp.ʃən/ | an amount of money that you pay regularly to revieve a product or service |
| iterate | /ˈɪt̬.ə.reɪt/ | to repeat a process, especially as part of a computer program |
| contextual | /kənˈteks.tʃu.əl/ | related to the context of something |
| examine | /ɪɡˈzæm.ɪn/ | to look at or consider a person or thing carefully and in detail in order to discover something about them |
| determine | /dɪˈtɝː.mɪn/ | to control or influence something directly, or to decide what will happen |
| evident | /ˈev.ə.dənt/ | easily seen or understood |
| permanently | /ˈpɝː.mə.nənt.li/ | always and for ever |
| corresponding | /ˌkɔːr.əˈspɑːn.dɪŋ/ | similar to, connected with, or caused by something else |
| accommodate | /əˈkɑː.mə.deɪt/ | to provide with a place to live or to be stored in / to give what is needed to someone |
| subtle | /ˈsʌt̬.əl/ | not loud, bright, noticeable, or obvious in any way / small but important / achieved in a quiet way that does not attract attention to itself and is therefore good or clever |
| subordinate | /səˈbɔːr.dən.ət/ | having a lower or less important position |
