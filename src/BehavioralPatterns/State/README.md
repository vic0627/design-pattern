# State Pattern （狀態模式）

## Concept

The State Pattern is a behavioral design pattern that allows an object to alter its behavior when its internal state changes. The pattern represents different states of an object as separate classes and delegates the state-specific behavior to these classes. This promotes encapsulation and makes it easier to add or modify states without altering the context (object) class.

## Structure and Components

- **Context**: Defines the interface for the client and maintains an instance of a State subclass representing the current state.
- **State**: Defines an interface for encapsulating the behavior associated with a particular state.
- **Concrete State**: Implements the State interface, providing the behavior associated with a specific state.
- **Client**: Interacts with the Context to trigger state changes.

## Application Scenarios

1. **Object with Multiple State**: When an object can exist in different states, and its behavior needs to change based on its state.
2. **Finite State Machines (FSM)**: Implementing a system with different states and transittions between them.
3. **Workflow Systems**: Managing the state transitions in a workflow, where each state represents a step in the process.
4. **Game Characters**: Representing the behavior of characters in a game that can have different states(e.g., idle, attacking, defending).

## Implementation Approach

1. **Define State Interface**: Create an interface or abstract class that declares methods for all possible actions that the context can perform.
2. **Create ConcreteState Classes**: Implement concrete classes for each state, providing the specific behavior associated with that state.
3. **Define Context Interface**: Declare methods in the context class that delegate to the current state.
4. **Implement Context Class**: Maintain an instance of the current state and delegate method calls to the current state.
5. **Client Usage**: Clients interact with the context, trigging state changes.

## Pros and Cons

### Pros

1. **Clean Separations of Concerns**: States are encapsulated in separate classes, promoting a clean and modular design.
2. **Easy to Add or Modify States**: Adding or modifying states is easier since each state is implemented in its own class.
3. **Simplifies Context Class**: The context class remains focused on its primary responsibilities, with state-specific behavior delegated to state classes.

### Cons

1. **Potential Proliferation of Classes**: As the number of states increases, the number of state classes may grow, potentially leading to a large number of classes.
2. **Complexity**: In simpler scenarios, using the State Pattern might introduce unnecessary complexity.

## Relationship with Other Patterns

1. **Strategy Pattern**: The State Pattern is similar to the Strategy Pattern in that both involve defining a family of algorithms, encapsulating each algorithm, and making them interchangeable. The key difference is in their intent; the State Pattern is focused on managing the state of an object, while the Strategy Pattern is more concerned with algorithms and strategies.
2. **Singleton Pattern**: The State Pattern can be combined with the Singleton Pattern if states do not have any state-specific data and can be shared among context instances.
3. **Observer Pattern**: The State Pattern can be used in conjunction with the Observer Pattern to notify interested objects when the state of a context changes.

---

In summary, the State Pattern is valuable for managing in the behavior of objects that can exist in different states. It promotes clean separation of concerns and makes it easier to add or modify states without affecting the overall structure of the system.
