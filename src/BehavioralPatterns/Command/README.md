# Command Pattern (命令模式)

## Concept

The Command Pattern is a behavioral design pattern that returns a request into a stand-alone object, allowing for parameterization of clients with different requests, queuing of requests, and logging of ths requests.
It decouples the sender and receiver of a request, prompting flexibility and extensibility in a system.

## Structure and Components

- Command: Declares an interface for executing a particular operation.
- Concrete Command: Implements the Command interface, binding itself to a Receiver and defining how to execute the command.
- Invoker: Asks the command to execute the request.
- Receiver: Knows how to