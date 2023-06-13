# Creational Patterns (創建型模式)

Creational Patterns focus on object creation mechanisms, providing ways to create objects in a flexible and reusable manner. They abstract the process of object creation and hide the specific details of how objects are instantiated.

## Examples of Creational Patterns

- Singleton (單例)
- Factory Method (工廠方法)
- Abstract Factory (抽象工廠)
- Builder (生成器)
- Prototype (原型)

## Additional Information

### 'Factory Method Pattern' vs 'Abstract Factory Pattern'

The Factory Method Pattern and the Abstract Factory Pattern are both creational design patterns, but they have distinct differences in their intent, structure, and usage.

| -- | Factory Method Pattern | Abstract Factory Pattern |
|----|------------------------|--------------------------|
| **Intent** | The Factory Mrthod provides an interface for creating objects, but it delegates the responsibility of object creation to subclasses. It encapsulates the object creation logic in a separate method called the factory method. | The Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying thier concrete classes. It encapsulates the creation of multiple objects that work together as a group. |
| **Structure** | The pattern consists of a base Creator class that declares the factory method, which is responsible for creating objects. Subclasses of the Ceator class implement the factory method to create specific product objects. | The pattern consists of an Abstract Factory interface, which declares a set of creation methods for each product family. Concrete Factory classes implement the Abstrzct Factory interface and are reponsible for creating specific product objects belonging to the same family. |
| **Usage** | The Factory Method Pattern is suitable when there is a need to delegate the object creation to subclasses, allowing them to decide the concrete class to instantiate. It provides flexibility in object creation and supports extensibility by allowing the addition of new subclasses without modifying the existing code. | The Abstract Factory Pattern is suitable when there is a need to create families of related objects that should be consistent and compatible. It ensures that the created objects adhere to a common interface or theme, allowing the client to work with these objects interchangeanly. |

#### Main Difference

| -- | Factory Method Pattern | Abstract Factory Pattern |
|----|------------------------|--------------------------|
| **Scope** | Creating individual objects | Creating families of related objects |
| **Responsibility** | Delegating to subclasses | Factory classes, which create objects belonging to a specific family |
| **Flexibility** | Providing more flexibility in object creation by allowing subclasses to determine the cincrete class toinstantiate | Ensuring the creation of compatible objects within a family, providing a higher level of abstraction |
| **Usage** | When there is a need for subclasses to have control over the object creation process | When there is a need to create families of objects that work together |
