# Iterator Pattern （迭代器模式）

## Concept

The Iterator Pattern is a behavioral design pattern that provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. It defines a standard interface for iterating over a collection of elements, decoupling the client code from the internal structure of the collection.

## Structure and Components

- Iterator: Defines an interface for accessing the elements of a collection.
- Concrete Iterator: Implements the Iterator interface, keeping track of the current position in the traversal of the aggregate.
- Aggregate: Declares an interface for creating an Iterator object.
- Concrete Aggregate: Implements the Aggregate interface, providing an Iterator for its elements.
- Client: Uses the Iterator to traverse the elements of the collection.

## Application Scenarios

1. Traversal of Collections: When you want to traverse elements of a collection without exposing its internal structure.
2. Sequential Access: Provides a uniform way to access elements sequentially in different types of collections.
3. Menu Navigation: Useful in menu systems where you need to iterate through menu items.
4. File System Navigation: When navigating through files and directories in a file system.

## Implementation Approach

1. Define the Iterator Interface: Declares methods like `next`, `hasNext`, etc., to access elements.
2. Implement Concrete Iterator: Maintains the current position and implements the Iterator interface.
3. Define Aggregate Interface: Declares a method to create an Iterator object.
4. Implement Concrete Aggregrate: Implements the Aggregate interface, providing an iterator for an Iterator for its elements.
5. Client Uses Iterator: The client obtains an Iterator from the Aggregrate and uses it to traverse the elements.

## Pros and Cons

### Pros

1. Decoupling: Clients can traverse collections without being dependent on their internal structures.
2. Simplified Client Code: Provides a standard way to iterate over different types of collections, making client code simpler.
3. Support for Different Iteration Strategies: Different iterators can be provided for the same collection, allowing for different ways of traversal.

### Cons

1. Composite Pattern: Iterators are often used in conjunction with Composite to traverse complex tree structures.
2. Visitor Pattern: Iterator and Visitor patterns can be combined to traverse and perform operations on elements of a collection.
3. Factory Method Patter: Often used together to create iterators for different types of aggregates.

---

In summary, the Iterator Pattern provides a standardized way to access elements in a collection without exposing its internal details. It promotes decoupling between the client code and the collection's structure, making it easier to work with different types of collection in a consistent manner.
