# Strategy Pattern （策略模式）

## Concept

The key concept of the Strategy Pattern is the separation of behavior (algorithms) from the context (object using the algorithms). It promotes composition over inheritance and enables the clients to choose the algorithm dynamically without tightly coupling them to specific implementations.

## Structure and Components

![strategy](https://refactoringguru.cn/images/patterns/diagrams/strategy/structure-indexed.png)

- **Context**: The context maintains a reference to a specific strategy and communicates with that object only through the strategy interface.
- **Strategy**: The Strategy interface is a common interface for all concrete strategies. It declares a method for the context to execute the strategy.
- **Concrete Strategies**: Concrete Startegies implements various different variants of algorithms used by the context.
- **Client**: The Client creates a specific strategy object and passes it to the context. The context provides a setter to allow the client to replace the associated strategy at runtime.

> When the context needs to run an algorithm, it invokes the execute method on the strategy object it is connected to. The context is unaware on the specific strategy type and how the algorithm is executed.

## Application Scenarios

- When multiple algorithms or strategies are available for solving a problem, and the client needs the flexibility to switch between them at runtime.
- When there is a need to isolate the algorithm implementation details from the client code.
- When a class has multiple conditional statements that can be replaced with different strategies.

## Implementation Approach

1. Identify the algorithms or complex conditional operators in the context class that are subject to frequent changes or may require selecting different algorithm variants at runtime.
2. Declare a common strategy interface for all variants of the algorithm.
3. <sup>#</sup>Extract each algorithm into separate classes, each implementing the strategy interface.
4. Add a member variable to the context class to store a reference to the strategy object. Provide a setter method to modify this member variable. The context should interact with the strategy object only through the strategy interface. If necessary, define an additional interface for the strategy to access the context's data.
5. The client must associate the context class with the appropriate strategy, allowing the context to perform its main work in an expected manner.

## Pros and Cons

### Pros

1. **Encapsulates algorithms**: The strategy pattern encapsulates different algorithms or strategies, making them easily interchangeable.
2. **Promotes code reuse**: Strategies can be reused across different contexts without modifying the client code.
3. Enables runtime flexibility: The client can switch between strategies dynamically at runtime without affecting the overall system behavior.
4. **Simplifies maintenance**: Adding or modifying strategies does not require changes to the client code, which simplifies maintenance and reduces the risk of introducing bugs.

### Cons

1. **Increased number of classes**: Implementing the strategy pattern may lead to an increased number of classes, especially when there are many strategies involved.
2. **Potential performance impact**: The strategy pattern may introduce overhead due to the additional layer of abstraction and indirection.

## Relationship with Other Patterns

- The **Bridge**, **State**, and **Strategy** patterns (including the **Adapter** pattern to some degree) have similar interfaces. In fact, they all share the same foundation - the **Composition** pattern, where work is delegated to other objects. However, each of them solves different problems. Patterns are not just recipes for organizing code in a specific way; you can also use them to discuss the problems they solve with other developers.
- The **Command** pattern and the **Strategy** pattern may appear similar because both can parameterize objects with some behavior. However, their intentions are quite different.
  - You can use the Command pattern to convert any operation into an object. The opteration's parameters become the object's member variables. You can delay the execution of the operation, put it in a queue, save command history, or send commands to remote services, <sup>#</sup>among other possibilities.
  - On the other hand, Strategy is often used to describe different ways of accomplishing something, allowing you to switch algorithms within the same context class.
- The **Decorator** pattern lets you change the appearance of an object, while the Strategy pattern allows you to change its <sup>#</sup>essence.
- The **Template Method** pattern is based on inheritance, allowing you to change parts of an algorithm by extending certain <sup>#</sup>portions in subclasses. The Strategy pattern, however, is based on composition, allowing you to change parts of an object's behavior by providing different strategies for the corresponding behavior. Template Method operates at the class level, making it static, while Strategy operates at the object level, allowing behavior switching at runtime.
- The **State** pattern can be seen as an extension of the Strategy pattern. Both are based on comopsition, as they delegate part of the work to "helper" objects to change their behavior in different contexts. The Strategy pattern keeps these objects completely independent and <sup>#</sup>unaware of each other. However, the State pattern does not limit dependencies between specific states and allows them to change their state in different contexts.

---

Overall, the Strategy Pattern provides a flexible and reusable way to manage algorithms and behaviors in an object-oriented system. It promotes code flexibility, extensibility, and maintenance ease. However, it should be used <sup>#</sup>judiciously, considering the <sup>#</sup>trade-offs <sup>#</sup>in terms of code complexity and performance.

---

## Glossary

| words | pronunciation | definition |
| ----- | ------------- | ---------- |
| interchangeable | /ˌɪn.t̬ɚˈtʃeɪn.dʒə.bəl/ | able to be exchanged with each other without making any difference or without being noticed |
| extract | /ɪkˈstrækt/ | to remove or take out something / to make someone give you something when they do not want to |
| among | /əˈmʌŋ/ | in the middle of or surrounded by other things / happening or being included as part of a group of people or things / to each one in a group of three or more people or things |
| essence | /ˈes.əns/ | the basic or most important idea or quality of something |
| portion | /ˈpɔːr.ʃən/ | a part or share of something larger |
| unaware | /ˌʌn.əˈwer/ | not understanding or realizing something |
| judiciously | /dʒuːˈdɪʃ.əs.li/ | in a way that has or shows reason and good judgment in making decisions |
| trade-offs | -- | a balancing of two opposing situations or qualities, both of which are desired / a trade-off is also a situation in which the achieving of something you want involves the loss of something else which is also desirable, but less so |
| in terms of | -- | in relation to something |
