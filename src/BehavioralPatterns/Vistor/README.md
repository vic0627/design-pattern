# Vistior Pattern （訪問者模式）

## Concept

The Visitor Pattern is a behavioral design pattern that enables the definition of new operations on a set of objects without changing their structures. It achieves this by defining a separate visitor class that encapsulates the new operation and allows it to be applied to a collection of objects.

## Structure and Components

- **Visitor**: Declares a visit method for each class of element it can visit. This method's signature typically includes the type of element being visited.
- **ConcreteVisitor**: Implements the visit methods declared in the Visitor interface, defining the behavior to be applied to each element type.
- **Element**: Declares an accept method that accepts a visitor. This method typically calls the visitor's visit method, passing itself as an argument.
- **ConcreteElement**: Implements the accept method declared in the Element interface. It allows a visitor to operate on its internal state.
- **ObjectStructure**: Represents a callection or structure of elements that can be visited by a visitor.
- **Client**: Initiates the operation by creating a visitor object and traversing the elements in the object structure.

## Application Scenarios

1. **Adding New Operations**: When you need to add new operations to a set of related classes without altering their indiviual class structures.
2. **Traversal of Complex Structures**: Useful for traversing and performing operation on complex object structures.
3. **Double Dispatch**: Solves the problem of double dispatch, where the method called depends on both the type of the visitor and the type of the element being visited.
4. **Compiler Design**: Visitor pattern is often used in compiler design for traversing the abstract syntax tree.

## Implementation Approach

1. **Identify Elements**: Determine the set of related classes (elements) on which new operations need to be performed.
2. **Design Visitor Interface**: Create a visitor interface with a visit method for each element type.
3. **Implement ConcreteVisitor**: Create concrete classes that implement the visitor interface, providing the specific behavior for each visitor method.
4. **Design Element Interface**: Define an interface for the elements with an accept method that takes a visitor as a parameter.
5. **Implement ConcreteElement**: Implement concrete classes for each element, providing an accept method that calls the appropriate visit method on the visitor.
6. **Create ObjectStructure**: Build a collection or structure of elements that can be traversed by a visitor.
7. **Client Usage**: Clients create a visitor object and traverse the elements in the object structure, applying the new operations.

## Pros and Cons

### Pros

1. **Open/Closed Principle**: Allows for adding new operations without modifying the indiviual elements, adhering to the Open/Closed Principle.
2. **Separation of Concerns**: Separates the algorithms (visitor) from the objects on which they operate, promoting a clean and modular design.
3. **Double Dispatch**: Resolves the issue of double dispatch, where the correct method is chosen based on both the type of the visitor and the type of the element.

### Cons

1. **Complexity**: Introducing the Visitor Pattern may add complexity to the code, especially for simple operations.
2. **Intrusive to Element Classes**: Requires modifying the element classes to add an accept method, which may be considered intrusive.

## Relationship with Other Patterns

1. **Composite Pattern**: The Visitor Pattern is often used in conjunction with the Composite Pattern. Visitor can traverse and perform operations on complex composite structures.
2. **Observer Pattern**: Visitor can act as observers, allowing them to monitor and perform operations on elements as they are traversed.
3. **Strategy Pattern**: The Visitor Pattern is similar to the Strategy Pattern in that it allows for defining and encapsulating algorithms. However, their intent is different: the Visitor Pattern focuses on operations applied to a set of elements, while the Strategy Pattern is more about selecting algorithms dynamically.

---

In summary, the Visitor Pattern is valuable when you need to add new operations to a set of related classes without modifying their indiviual structures. It provides a way to separate the algorithmic logic from the objects being operated upon, allowing for more flexibility and maintainability.

