# Builder Pattern （生成器模式）

## Concept

The Builder Pattern is a creational design pattern that separates the construction of a complex object from its representation. It allows the construction process to create different representations of an object by using the same construction process. The pattern involves a director class that orchestrates the construction process and a builder interface that defines the steps for building the object.

## Structure and Components

![builder](https://refactoringguru.cn/images/patterns/diagrams/builder/structure-indexed.png)

- **Product**: Represents the complex object to be contructed.
- **Builder**: Declares an interface with methods for constructing the different parts of the product.
- **ConcreteBuilder**: Implements the Builder interface, providing specific implementations for constructing parts of the product.
- **Director**: Orchestrates the construction process by using a builder to build the product.
- **Client**: Initiates the construction process by working with the director and the builder.

## Application Scenarios

1. **Complex Object Construction**: When constructing a complex object with many parts, each with variations.
2. **Flexible Object Creation**: To create different configurations or representations of an object without exposing its internal structure.
3. **Step-byStep Construction**: Useful when the construction process involves multiple steps, and different clients may require different steps.
4. **Parameterized Contruction**: When there are optional or variable components in the object, allowing clients to choose what components to include.

## Implementation Approach

1. **Design Product Class**: Define the complex object (product) that needs to be constructed.
2. **Design Builder Interface**: Create an interface that declares methods for building different parts of the product.
3. **Implement ConcreteBuilder**: Create concrete classes that implement the Builder interface, providing specific implementations for constructing parts of the product.
4. **Design Director Class**: Create a director class that orchestrates the construction process. The director works with a builder to build the product step by step.
5. **Client Usage**: Clients work with the director to initiate the construction process, providing a specific builder to create different variations of the product.

## Pros and Cons

### Pros

1. **Separation of Concerns**: Separates the construction of a complex object from its representation, allowing different representation to be created using the same construction process.
2. **Step-by-Step Construction**: Provides a step-by-step construction process, making it easier to control and understand the creation of complex objects.
3. **Flexible Configurations**: Allows clients to create different configurations or representations of the product by choosing different builders.

## Cons

1. **Increased Number of Classes**: Introducing builders and directors may lead to an increased number of classes, which might be overwhelming for small-scale applications.
2. **Complexity**: The pattern adds complexity, especially if the product has a simple and straightforward construction process.

## Relationship with Other Patterns

1. **Abstract Factory Pattern**: The Builder Pattern is often compared to the Abstract Factory Pattern. While both deal with object creation, the Builder focuses on constructing a complex object step by step, whereas the Abstract Factory focuses on creatin families of related or dependent objects.
2. **Prototype Pattern**: The Builder Pattern can be used with the Prototype Pattern to create complex objects by copying and modifying prototypes using a builder.
3. **Composite Pattern**: The Builder Pattern can be used with the Composite Pattern to build complex structures where the parts can be indiviual objects or compositions.

---

In summary, the Builder Pattern is valuable when constructing complex objects with multiple variations or configurations. It provides a step-by-step construction process, separating the construction from the representation, and allowing clients to create different configurations of the product.
