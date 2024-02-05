# Composite Pattern （組合模式）

## Concept

The Composite Pattern is a structural design pattern that allows clients to treat individual objects and compositions of objects uniformly. It enables the creation of tree structures where both leaf nodes (individual objects) and composite nodes (collections of objects) share a common interface. Clients can interact with objects and compositions in a consistent manner.

## Structure and Components

![composite](https://refactoringguru.cn/images/patterns/diagrams/composite/structure-zh-indexed.png)

- **Component**: Declares the interface for objects in the composition, whether they are leaf nodes or composite nodes. It defines methods for adding, removing, and accessing child components.
- **Leaf**: Represents individual objects that do not have children. Implements the Component interface.
- **Composite**: Represents compositions of objects, which can be either leaf nodes or other composite nodes. Implements the Component interface and can contain child components.
- **Client**: Interacts with components through the common Component interface, treating both leaves and composites uniformly.

## Application Scenarios

1. **Tree Structures**: Representing hierarchical structures where both individual objects and groups of objects need to be treated uniformly.
2. **Graphics Systems**: Building complex graphical shapes or structures using basic shapes and compositions.
3. **File Systems**: Representing files and directories in a file system where directories can contain both files and subdirectories.
4. **Organization Charts**: Modeling organizational structures where departments can contain both individual employees and sub-departments.

## Implementation Approach

1. **Design Component Interface**: Create an interface or abstract class that declares methods for managing child components (add, remove, etc.).
2. **Implement Leaf and Composite Classes**: Create concrete classes for leaf nodes (individual objects) and composite nodes (collections of objects), both implementing the Component interface.
3. **Client Usage**: Clients interact with components through the common Component interface, treating leaves and composites uniformly.
4. **Build Composite Structure**: Build a composite structure by creating compositions of leaves and composites, forming a tree-like structure.

## Pros and Cons

### Pros

1. **Uniform Treatment**: Clients can treat individual objects and compositions of objects uniformly through a common interface.
2. **Flexibility**: Easily add new components or modify existing ones without affecting the client code.
3. **Recursive Structure**: The pattern naturally supports recursive structures, allowing for complex hierarchies.

### Cons

1. **Complexity**: The structure of the Composite Pattern can become complex, especially in large-scale applications.
2. **Overhead**: The pattern may introduce some overhead due to the common interface and the need for handling both lead and composite nodes.

## Relationship with Other Patterns

1. **Decorator Pattern**: The Composite Pattern is often used in conjunction with the Decorator Pattern. Components in a composite structure can be decorated with additional responsibilites.
2. **Visitor Pattern**: The Composite Pattern and Visitor Pattern can be used together to traverse and perform operations on the components of a composite structure.
3. **Chain of Responsibility Pattern**: Components in a composite structure can be part of a chain, allowing for the handling of requests at different levels of the hierarchy.

---

In summary, the Composite Pattern is valuable for creating tree structures where individual objects and compositions of objects need to be treated uniformly. It provides a common interface for clients to interact with both leaves and composites, offering flexibility and ease of extension in hierarchical systems.
