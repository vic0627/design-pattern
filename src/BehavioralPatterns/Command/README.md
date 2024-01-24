# Command Pattern （命令模式）

## Concept

The Command Pattern is a behavioral design pattern that returns a request into a stand-alone object, allowing for parameterization of clients with different requests, queuing of requests, and logging of ths requests.
It decouples the sender and receiver of a request, prompting flexibility and extensibility in a system.

## Structure and Components

![command](https://refactoringguru.cn/images/patterns/diagrams/command/structure-indexed.png)

- **Invoker**: Asks the command to execute the request.
- **Command**: Declares an interface for executing a particular operation.
- **Concrete Command**: Implements the Command interface, binding itself to a Receiver and defining how to execute the command.
- **Receiver**: Knows how to perform the operation associated with the command.
- **Client**: Creates a Concrete Command and associates it with a Receiver.

## Application Scenarios

1. **GUI Buttons and Menu Items**: Each button or menu item can be considered a command that triggers a specific action.
2. **Transcation Systems**: Commands can be used to implement transcations by encapsulating a series of operations into a single command.
3. **Remote Controls**: Representing remote control buttons as commands to control various devices.
4. **Queue Systems**: Commands can be queued and processed in a specific order.

## Implementation Approach

1. **Define the Command Interface**: Declares the `execute` method.
2. **Create Concrete Command Classes**: Implements the `Command` interface, associating itself with a `Receiver`.
3. **Implement Receiver**: Knows how to perform the actual operation.
4. **Create Invoker**: Asks the command to execute the request.
5. **Client Associates Commands with Receivers**: Creates Concrete Command instances and associates them with specific Receivers.
6. **Execute Commands**: The client or invoker calls the `execute` method on the command, which triggers the associated opteration in the receiver.

## Pros and Cons

### Pros

1. **Decoupling**: Separates the sender and receiver of a request, promoting a more flexible and extensible design.
2. **Command Queuing**: Commands can be queued, allowing for easy implementation of undo/redo functionality.
3. **Easy Extension**: New commands can be added without changing existing code.

### Cons

1. **Increased Number of Classes**: Can result in a large number of classes for each command and receiver, potentially increasing complexity.
2. **Potential Performance Overhead**: Depending on the complexity of the command logic, there might be a performance impact.

## Relationship with Other Patterns

1. **Memento Pattern**: Used in conjunction with Command to implement undo mechanisms.
2. **Observer Pattern**: Commands can be used to implement a publish-subscribe mechanism where a command notifies multiple objects about an event.
3. **Composite Pattern**: Commands can be treated as leaf nodes in a composite structure.

---

In summary, the Command Pattern provides a way to encapsulate a request as an object, allowing for the parameterization of clients with different requests and facilitating the implementation of features like undo, redo, and queuing. It is versatile and can be combined with other patterns to achieve more complex system designs.
