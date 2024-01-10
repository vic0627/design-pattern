# Memento Pattern (備忘錄模式)

## Concept

The Memento Pattern is a behavioral design pattern that provides a mechanism for capturing and externalizing an object's internal state so that the object can be restored to this state later.
This pattern is useful in scenarios where you need to implement undo mechanisms, versioning, or persistent storage without exposing the internal of the object.

## Structure and Components

- Originator: The object whose state needs to be saved. It creates a Memento containing a snapshot of its current internal state.
- Memento: The object that stores the state of the Originator. It has two interfaces: one is for the Originator to store the state, and the other is for the Caretaker to retrieve the state.
- Caretaker: The object that keeps track of various snapshots of the Originator's state. It can request the Originator to restore its state.

## Application Scenarios

- Undo Mechanism: Allows users to revert an object to its previous state.
- Version Control Systems: Useful for saving and restoring the state of an object at different points in time.
- Database Transactions: Storing and restoring the state of an object during database transactions.
- Snapshot functionality: Creating snapshots of an object's state for various purposes.

## Implementation Approach

1. Originator Implementation
   - Define methods to set and get the state.
   - Create a Memento object with a copy of the current state.

2. Memento Implementation
   - Store the state provided by the Originator.
   - Provide methods for the Originator to access the stored state.

3. Caretaker Implementation
   - Keep a list of Mementos.
   - Request Memento from the Originator to store states and restore states.

## Pros and Cons

### Pros

- Isolation of Object State: The object's internal state is encapsulated within the Memento, providing a clear separation.
- Supports Undo Mechanisms: Facilitates easy implementation of undo mechanisms.
- Versioning and Persistence: Useful for creating versioning systems and handing persistence.

### Cons

- Overhead: Can introduce overhead, especially if many states need to be stored.
- Security Concerns: In situations where the Originator's state should not be exposed, this pattern might not be suitable.

## Relationship with Other Patterns

- Command Pattern: Memento can be used in combination with the Command Pattern to implement undo functionality efficiently.
- State Pattern: While Memento captures an object's state, State Pattern defines the different states and their behaviors.

---

In summary, the Memento Pattern is valuable in scenarios where you need to manage the state of an object, providing a flexible way to save and restore its state without exposing its internals. It plays well with other patterns, enhancing the overall design of a system.
