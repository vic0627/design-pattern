# Factory Method pattern (工廠模式)

> The **Factory Method pattern** is a creational design pattern that provides an interface for creating objects, but allows subclasses to decide which class to ^#^instantiate. It encapsulates the object creation logic in a separate component, know as the factory, which is responsible for creating instances of various related classes based on specific conditions or parameters.

## Concept

The main concept behind the Fatory Pattern is to abstract the process of object creation, decoupling the client code from the specific classes being instantiated, Instead of directly calling a constructor to create objects, the client interacts with the factory interface, which ^#^internally determines the appropriate class to instantiate and returns the desired object.

## Structure and Components

```text
+----------------------------+             +--------------------+
| Creator                    |------------>| interface Product  |
| ...                        |             | + doStuff()        |
| + someOperation()          |             +--------------------+
| + createProduct(): Product |               ^
+----------------------------+               |- +-------------------+
  ^                                          |  | ConcreteProduct A |
  |- +----------------------------+          |  +-------------------+
  |  | ConcreteCreator A          |          |
  |  | ...                        |          |- +-------------------+
  |  | + createProduct(): Product |             | ConcreteProduct B |
  |  +----------------------------+             +-------------------+
  |
  |- +----------------------------+
     | ConcreteCreator B          |
     | ...                        |
     | + createProduct(): Product |
     +----------------------------+
```

- **Product 產品**
  Products will declare interfaces. These interfaces are common for all objects constructed by creators and their subclasses.
- **Concrete Products 實體產品**
  Concrete products are different implementations of the product interfaces.
- **Creator 創建者**
  Creators declare factory methods that return product objects. The return type of these methods must match the product interface.
  You can declare the factory method as an abstract method, forcing each subclass to implement it differently. ^#^Alternatively, you can return a default product type in the base factory method.
  Note that despite its name, the main responsibility of the creator is not creating products. Generally, the creator class contains core business logic related to the products. The factory method separates this logic from the concrete product classes. For example, a large software development company may have a programmer taining department. However, their primary work is coding, not producting programmers.
- **Concrete Creators 實體創建者**
  Concrete creators override the base factory method to return different types of products.
  Note that calling the factory method doesn't necessarily create new instance each time. The factory method can also return exisiting objects from a cache, object pool, or other sources.

## Application Scenarios

- The client code needs to create objects of a ^#^certain type, but the exact class to instantiate may vary based on specific conditions or ^#^configurations.
- The creation process of objects is complex or requires specific initialization steps. and it is beneficial to encapsulate this logic in a separate factory component.
- The client code needs to work with objects through a common interface or base class, without being aware of the specific subclasses or their creation details.

## Implementation Approach

1. Ensure that all products adhere to the same interface. This interface should declare methods that make sense for all products.
2. Add an empty factory method to the creator class. The return type of this methodd should follow the common product interface.
3. Locate all references to the product constructors in the creator code. Replace them with ^#^invocations of the factory method, while moving the product creation code into the factory method.
  You may need to add temporary parameters to the factory method to control the type of product to be returned.
  The code in the factory method may appear messy. It may contain complex switch statements to select the various product classes that need to be instantiated. But don't worry, we will fix this issue soon.
4. Now, write a creator subclass for each product in the factory method. Override, the factory method in each subclass and move the ^#^relevant creation code from the base method into the factory method.
5. If there are too many product types in the application and creating a subclass for each product is not necessary, you can reuse control parameters from the base class in the subclasses.
6. If, after the code movement described above, there is no code left in the base factory method, you can convert it into an abstract class. If there are still other statements in the base factory method, you can set them as the default behavior for that method.

## Pros and Cons

### Advantages

1. Encapsulation: The Factory encapsulates the object creation logic, providing a clear separation between the client code and the concrete classes being instantiated.
2. Flexibility: By using a factory interface, the client code can easily switch between different implementations or variations of the created objects without modifying its own code.
3. Code Organization: The Factory Pattern helps to organize and centralize the object creation logic, making the code base more maitainable and easier to understand.

### Disadvantages

1. Increased Complexity: Intoducing a factory component adds an extra layer of abstraction, which may increase the overall complexity of the system.
2. Dependency on the Factory: The client code becomes dependent on the factory interface, which can make the code less flexible if the factory interface needs to be modified.
3. Runtime Overhead: Depending on the implementation, the factory pattern may introduce some runtime overhead due to the additional indirection and object creation logic.

## Relationship with other patterns

- The **Factory Method** pattern is often used at the beginning of a design when objects need to be created in a simple way and customization can be done through subclasses. It may later ^#^evolve to use the **Abstract Factory** pattern, **Prototype** pattern, or **Builder** pattern, which provide more flexibility but are more complex.
- The **Abstract Factory** pattern is often based on a set of **Factory Methods**, but you can also use the **Prototype** pattern to generate these classes.
- You can combine the **Factory Method** pattern with the **Iterator** pattern to have subclasses return different types of iterators and make the compatible with the collections.
- The **Prototype** pattern does not rely on inheritance, so it avoids the ^#^downsides of inheritance. However, it requires complex initialization of the copied objects. On the other hand, the **Factory Method** pattern is based on inheritance but does not require initialization steps.
- The **Factory Method** is a special form of the **Template Method** pattern. Additionally, the Factory Method can serve as a step within a larger Template Method.

---

In summary, the Factory Pattern is a design pattern that provides an interface for creating objects, allowing subclasses or implementations to decide which class to instantiate. It promotes encapsulation, flexibilty, and code organization, but it may also introduce complexity and runtime overhead. It is suitable for scenarios where object creation needs to be abstracted and varied based on specific conditions or configurations.

---

## Glossary

| words | pronunciation | definition |
| ----- | ------------- | ---------- |
| instantiate | /ɪnˈstæn.ʃɪ.eɪt/ | to represent or to be an example of something |
| internally | /ɪnˈtɝː.nəl.i/ | in a way that exists or happens within a person's mind |
| alternatively | /ɑːlˈtɝː.nə.t̬ɪv.li/ | used to suggest another possibility |
| certain | /ˈsɝː.tən/ | having no doubt or knowing exactly that something is true, or known to be true, correct, exact, or effective / impossible to avoid extremely likely |
| configuration | /kənˌfɪɡ.jəˈreɪ.ʃən/ | the particular arrangement or pattern of a group of related things / the way in which all the equipment that makes up a computer system is set to operate |
| invocation | /ˌɪn.vəˈkeɪ.ʃən/ | the mention or use of something such as a law or an idea in order to explain or support what you are doing |
| relevant | /ˈrel.ə.vənt/ | connected with what is happening or being discussed |
| evolve | /ɪˈvɑːlv/ | to develop gradually, or to cause something or someone to develop gradually |
| downside | /ˈdaʊn.saɪd/ | a disadvantage of a situation |
