# Flyweight Pattern （享元）

## Concept

The Flyweight Pattern is a structural design pattern that aims to minimize memory usage or computational expenses by sharing as much as possible with related objects. It achieves this by sharing common state (<sup>#</sup>intrinsic) among multiple objects, reducing the overall memory footprint and improving performance.

## Structure and Components

- **Flyweight Interface**: Declares methods through which concrete flyweights can receive and act on <sup>#</sup>extrinsic state.
- **ConcreteFlywight**: Implements the Flyweight interface and stores intrinsic state that can be shared among multiple objects.
- **FlyweightFactory**: Manages the creation and storage of flyweight objects. Ensures that flyweights are shared and reused.
- **Client**: Maintains extrinsic state and collaborates with flyweights.

## Application Scenarios

1. **Large Number of Similar Objects**: When a large number of objects share common state, and it is more efficient to share that state rather than store it in each object.
2. **Memory Optimization**: Useful in scenarios where memory optimization is critical, and the same state can be used across multiple instances.
3. **Text Editors**: Sharing the same character or font objects in a text editor to represent the characters in a document efficiently.
4. **Graphic Systems**: Managing shared resources such as colors, textures, or patterns in a graphic system.

## Implementation Approach

1. **Identigy Intrinsic ans Extrinsic State**: Determine what state can be shared among multiple objects (intrinsic) and what state must be unique to each object (extrinsic).
2. **Design Flyweight Interface**: Create an interface or abstract class that declares methods for receiving and acting on extrinsic state.
3. **Implement ConcreteFlyweights**: Create classes that implement the Flyweight interface and store intrinsic state. Ensure they are capable of being shared.
4. **Implement UnsharedConcreteFlyweight**: If necessary, create a class that includes unshareable intrinsic state.
5. **Create FlyweightFactory**: Manage the creation and storage of flyweight objects. Ensure flyweights are shared and reused.
6. **Client Usage**: Clients use the FlyweightFactory to abtain flyweight instances and provide extrinsic state when needed.

## Pros and Cons

### Pros

1. **Memory Optimization**: Reduces memory usage by sharing common state among multiple objects.
2. **Improved Performance**: Reduces computational expenses by reusing shared flyweight instances.
3. **Simplified Object Structure**: Allows for a more efficient representation of objects by separating intrinsic and extrinsic state.

### Cons

1. **Complexity**: Introducing a Flyweight pattern might add complexity, especially if the distinction between intrinsic and extrinsic state is not clear.
2. **Potential Overhead**: In some cases, the overhead of managing shared objects through a FlyweightFactory might outweigh the benefits, especially for small-scale applications.

## Relationship with Other Patterns

1. **Composite Pattern**: The Flyweight Pattern is often used in conjunction with the Composite Pattern. The shared flyweight oobjects can be used as leaf nodes within a composite structure.
2. **Singleton Pattern**: The FlyweightFactory can be implemented as a singleton if it's reponsible for managing the creation and storage of flyweight objects.
3. **Proxy Pattern**: A proxy can be used to control access to shared flyweight objects, providing addditional functinality or security checks.

---

In summary, the Flyweight Pattern is useful in scenarios where a large number of objects share common state, allowing for efficient memory usage and improved performance. It is particularly beneficial in resource-intensive application where optimization is critical.

---

## Glossary

| words | pronunciation | definition |
| ----- | ------------- | ---------- |
| intrinsic | |
| extrinsic | |