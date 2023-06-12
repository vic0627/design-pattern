# Observer Pattern (觀察者模式)

> The **Observer Pattern** is a behavioral design pattern that establishes a one-to-many dependency between objects. In this pattern, when the state of one object (called the subject or observable) changes, all its dependent objects (called observers) are notified and updated automatically.

## Concept

The main concept behind the Observer Pattern is to decouple the subject and observers, allowing them too vary indenpendently. The subject maintains a list of observers and provides methods to add or remove observers. The observers register thenselves with the subject and receive updates whenever there is a change in the subject's state.

## Structure and Components

```text
        +------------------------------+        +----------------------+
        | Publisher                    |        | interface Subscriber |
        | - subscribers: Subscriber[]  |<>----->| + update(context)    |
        | - mainState                  |        +----------------------+
        | + subscribe(s: Subscriber)   |                   ^
        | + unSubscribe(s: Subscriber) |                   |
┌-------| + notifySubscribers()        |                   |
|   ┌---| + mainBusinessLogic()        |                   |
|   |   +------------------------------+                   |
|   |                  ^                                   |
|   |                  |                        +----------------------+
|   |                  |                        | Concrete Subscribers |+
|   |   {                                   ┌-->| ...                  ||
|   |       s = new ConcreteSubscriber();---┘   | + update(context)    ||
|   |       publisher.subscribe(s);             +----------------------+|
|   |   }                                        +----------------------+
|   |                  |   |
|   |                  |   |
|   |               +--------+
|   |               | Client |
|   |               +--------+
|   |
|   └---{
|           mainState = newState;
|           notifySubscribers();
|       }
|
└-------{
            foreach (s in subscribers);
            s.update(this);
        }
```

- **Publisher 發布者**
  A Publisher sends events of interest to other objects. The events occur when the Publisher's own state changes or specific actions are performed. The Publisher includes a subscription framework that allows new subscribers to join and current subscribers to leave the list.
  When a new event occurs, the Publisher iterates through the subscription list and invokes the notify method of each subscriber object. This method is declared in the Subscriber interface.
- **Subscriber 訂閱者**
  The Subscriber interface declares the notification interface. In most cases, this interface only contains an update method. The method can hace multiple parameters, allowing the Publisher to pass detailes information about the event during updates.
- **Concrete Subscriber 訂閱者實體**
  Concrete Subscribers can perform operations in response to the publisher's notifications. All Concrete Subscriber classes implement the same interface, so the Publisher does not need to be coupled with specific classes.
  Subscribers often require some contextual information to handle updates correctly. Therefore, the Publisher typically passes some contextual data as parameters to the notify method. The Publisher can also pass itself as a parameter, allowing Subscribers to directly access the required data.
- **Client 客戶端**
  The Client creates Publisher and Subscriber objects separately and registers the Publisher updates with the Subscribers.

## Application Secenarios

- Event Handling: When we want to notify multiple objects about the occurence of an event. The subject can act as an event source, and the observers can be event listeners that react to the event.
- Model-View-Controller (MVC) Architectural Pattern: In the MVC pattern, the observer pattern is often used to ensure that the views are automatically updated when the model changes. The model represents the Subject, and the views represent the observers.
- Pub-Sub System: When we have a publish-subscribe system where publishers and subscribers need to communicate with each other. The subject acts as the publisher, and the Observers act as subscribers who receive updates.

## Pros and Cons

### Advantages

1. Loose Coupling: The subject and observers are loosely coupled, allowing them to evolve independently. They are not tightly depentent on each other, which improves maintainability and reusability.
2. Extensibility: It's easy to add observers without modifying the subject. The subject doesn't need to know the specific types of observers, making it flexible to accommodate new obdervers in the furture.
3. Modularity: The Oberver Pattern promotes modularity by separating the subject and observers into distinct objects. This enhances code organization and makes it easier to understand and modify.

### Disadvantages

1. Unexpected Updates: Observers may receive updates even when they are not intrested in certain changes. This can lead to unnecessary updates and potentially impact performance.
2. Ordering of Notifications: The order in which observers receive notifications may be non-deterministic. If the order of notifications is important, additional mechanisms may be needed to enforce a specific order.
3. Memory Leaks: If observers are not properly removed from the subject, they can cause memory leaks, as the subject keeps references to the observers even when they are no longer needed.

---

In summary, the Observer Pattern is a design pattern that establishs a dependency between a subject and multiple observers. It allows for loose coupling, extensibility, and modularity. It is suitable for scenarios where objects need to be notified of changes in another object's state without tightly coupling them together.
