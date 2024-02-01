# Mediator Pattern （中介者模式）

## Concept

The Mediator Pattern is a behavioral design pattern that defines an object (the mediator) to centralize communication between a set of related objects (colleagues). Instead of allowing colleagues to communicate directly, they communicate through the mediator, reducing dependencies and promoting loose coupling between the components.

## Structure and Components

![mediator](https://refactoringguru.cn/images/patterns/diagrams/mediator/structure-indexed.png)

- **Mediator**: Defines an interface for communication between colleagues. It encapsulates the interaction logic and manages the communication flow.
- **ConcreteMediator**: Implements the Mediator interface, coordinating the communication between the colleagues.
- **Colleague**: Defines an interface for interaction with the mediator.
- **ConcreteColleague**: Implements the Colleague interface, communicating with other colleagues through the mediator.
- **Client**: Initiates the creation of colleagues and the mediator, setting up the communication network.

## Application Scenarios

1. **GUI Components**: Managing communication between different GUI components in a user interface.
2. **Flight Control System**: Coordinating communication between different components of a flight control system.
3. **Chat Application**: Handling communication between users in a chat application.
4. **Multiplayer Games**: Managing interaction between players in a multiplayer game.

## Implementation Approach

1. **Identify Colleagues**: Determine the set of objects that need to communicate with each other.
2. **Design Mediator Interface**: Create a Mediator interface defining methods for communication between colleagues.
3. **Implenent ConcreteMediator**: Create a concrete mediator class implementing the Mediator interface. It manages the communication and interaction logic.
4. **Design Colleague Interface**: Create a Colleague interface defining methods for interaction with the mediator.
5. **Implement ConcreteColleagues**: Implement concrete colleague classes that commnicate through the mediator by calling its methods.
6. **Client Setup**: Create the client, instantiate the mediator and colleagues, and set up the commnication network.

## Pros and Cons

### Pros

1. **Decoupling**: Promotes loose coupling between objects by centializing communication through the mediator.
2. **Simplified Communication**: Simplifies the communication logic between objects by providing a single point of interaction.
3. **Scalability**: Makes it easier to add new colleagues without modifying existing ones.

### Cons

1. **Complexity**: Introducing a mediator may add an extra layer of complexity to the system, especially for small-scale application.
2. **Increased Dependency on Mediator**: Colleagues become dependent on the mediator, and the mediator becomes a central point that can potentially become a bottleneck.

## Relationship with Other Patterns

1. **Observer Pattern**: Mediator and Observer patterns are often used together. The Mediator can act as a central communication hub, and colleague can subscribe as observers to receive updates.
2. **Facade Pattern**: The Mediator Pattern is similar to the Facade Pattern in that both provide a simplified interface to a set of components. However, the Facade focuses on simplifying the interface for clients, while the Mediator focuses on managing the interaction between components.
3. **Command Pattern**: Mediator can be used to implement command-based communication between colleagues, allowing for more complex interactions.

---

In summary, the Mediator Pattern is useful when you have a set of objects that need to communicate with each other, and you want to avoid direct dependencies between them. It centralizes communication through a mediator, promoting loose coupling and simplifying the interaction logic.
