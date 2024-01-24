# Iterator Pattern （迭代器模式）

## Concept

The Iterator Pattern is a behavioral design pattern that provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. It defines a standard interface for iterating over a collection of elements, decoupling the client code from the internal structure of the collection.

## Structure and Components

![iterator](https://refactoringguru.cn/images/patterns/diagrams/iterator/structure-indexed.png)

- **Iterator**: Declares the operations needed to traverse a collection: getting the next element, getting the current position, and restarting the iteration, etc.
- **Concrete Iterator**: Implements a specific algorithm for traversing a collection. Iterator objects must track their own traversal progress. This allows multiple iterators to independently traverse the same collection.
- **Collection**: Declares one or more methods to obtain an iterator compatible with the collection. Note that the return type of these methods must be declared as the iterator interface, so concrete collections can return various types of iterators.
- **Concrete Collection**: Return a specific concrete iterator class entity when a client requests an iterator. You might wonder where the remaining collection code is? Don't worry, it is also in the same class. It's just that these details are not important for the actual pattern, so we have omitted them.
- **Client**: Typically do not create iterators themselves but obtain them from the collection. However, in specific cases, clients can directly create an iterator (for example, when the client needs to customize a special iterator).

## Application Scenarios

1. **Traversal of Collections**: When you want to traverse elements of a collection without exposing its internal structure.
2. **Sequential Access**: Provides a uniform way to access elements sequentially in different types of collections.
3. **Menu Navigation**: Useful in menu systems where you need to iterate through menu items.
4. **File System Navigation**: When navigating through files and directories in a file system.

## Implementation Approach

1. **Define the Iterator Interface**: Declares methods like `next`, `hasNext`, etc., to access elements.
2. **Implement Concrete Iterator**: Maintains the current position and implements the Iterator interface.
3. **Define Aggregate Interface**: Declares a method to create an Iterator object.
4. **Implement Concrete Aggregrate**: Implements the Aggregate interface, providing an iterator for an Iterator for its elements.
5. **Client Uses Iterator**: The client obtains an Iterator from the Aggregrate and uses it to traverse the elements.

## Pros and Cons

### Pros

1. **Decoupling**: Clients can traverse collections without being dependent on their internal structures.
2. **Simplified Client Code**: Provides a standard way to iterate over different types of collections, making client code simpler.
3. **Support for Different Iteration Strategies**: Different iterators can be provided for the same collection, allowing for different ways of traversal.

### Cons

1. **Composite Pattern**: Iterators are often used in conjunction with Composite to traverse complex tree structures.
2. **Visitor Pattern**: Iterator and Visitor patterns can be combined to traverse and perform operations on elements of a collection.
3. **Factory Method Pattern**: Often used together to create iterators for different types of aggregates.

---

In summary, the Iterator Pattern provides a standardized way to access elements in a collection without exposing its internal details. It promotes decoupling between the client code and the collection's structure, making it easier to work with different types of collection in a consistent manner.
