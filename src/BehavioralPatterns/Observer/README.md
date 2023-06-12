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
- **Client 客戶端**
