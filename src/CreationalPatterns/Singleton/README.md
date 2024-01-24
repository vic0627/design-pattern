# Singleton pattern （單例模式）

## Concept

The key concept of the Singleton Pattern is to have a class that is responsible for creating its own unique instance and providing a global point of access to that instance. It typically involves creating a private constructor to prevent <sup>#</sup>external instantiation and a static method to provide access to the single instance.

## Structure and Components

![singleton](https://refactoringguru.cn/images/patterns/diagrams/singleton/structure-zh-indexed.png)

- **Singleton**: The Singleton class declares a static method named `getInstance` to <sup>#</sup>obtain an  instasnce of the class, which returns the same instance of the class.

> The constructor of the Singleton must be hidden from the client code. The method call must be the only way to obtain the Singleton object.

## Application Scenarios

- When there should be only one instance of a class that needs to be shared by multiple parts of the system.
- When global access to an object is required, such as a database connection, thread pool, or configuration settings.
- When lazy initialization of the object is desired to improve performance or resource usage.

## Implementation Approach

1. Add a private static member variable in the class to store the singleton instance.
2. Declare a public static construction method to obtain the singleton instance.
3. Implement 'lazy initializaton' in the statinc method. This method will create a new object on the first call and store it in the static member variable. <sup>#</sup>Subsequent calls to this method will return the same instance.
4. Set the class constructor as private. The static method of the class can still call the constructor, but other objects cannot.
5. Check the client code and replace calls to the constructor of the singleton with calls to its static construction method.

## Pros and Cons

### Pros

1. **Single instance**: The Singleton Pattern ensures that there is only one instance of a class, providing a global point of access to it.
2. **Global access**: The single instance can be accessed globally, allowing different parts of the system to use it easily.
3. **Lazy initialization**: The Singleton can be lazily initialized, meaning that the instance is created only when it is first needed, improving performance and resource usage.
4. **Thread safety**: With proper implementation, the Singleton Pattern can provide thread-safe access to the single instance.

### Cons

1. **Global state**: The use of a Singleton introduces global state into the application, which can make the code harder to test an maintain.
2. **Tight coupling**: Classes that depend on the Singleton become tightly coupled to it, which can make the code less flexible and harder to modify.
3. **Hidden dependencies**: The use of a Singleton can hide dependencies and make it harder to reason about the flow of data and control in the application.

## Relationship with other patterns

- The **Facade** pattern can often be converted into a Singleton pattern because, in most cases, a single facade object is <sup>#</sup>sufficient.
- If you can simplify all states of an object into a flyweight object, then the **Flyweight** pattern becomes similar to the Singleton pattern. However, these two patterns have two fundamental differences:
  1. There is only one Singleton entity, whereas the Flyweight class can have multiple entities with different <sup>#</sup>intrinsic states.
  2. Singleton objects can be <sup>#</sup>mutable, whereas Flyweight objects are <sup>#</sup>immutable.
- The **Abstract Factory**, **Builder**, and **Prototype** patterns can all be implemented using the Singleton pattern.

---

Overall, the Single Pattern provides a way to ensure that there is only one instance of a class and enables global access to that instance. It is useful in scenarios where a single, shared resource needs to be managed throughout the application. However, it should be used judiciously, considering the potential <sup>#</sup>drawbacks of global state and tight coupling.

---

## Glossary

| words | pronunciation | definition |
| ----- | ------------- | ---------- |
| restrict | /rɪˈstrɪkt/ | to limit something, reduce its size, or prevent it from increasing |
| external | /ɪkˈstɝː.nəl/ | of, on, for, or comming from the outside |
| obtain | /əbˈteɪn/ | to get something, especially by asking for it, buying it, working for it, or producing it from something else |
| subsequent | /ˈsʌb.sɪ.kwənt/ | happening after something else |
| sufficient | /səˈfɪʃ.ənt/ | enough for a particular purpose |
| intrinsic | /ɪnˈtrɪn.zɪk/ | being an extremely important and basic characteristic of a person or thing |
| mutable | /ˈmjuː.t̬ə.bəl/ | able or likely to change |
| immutable | /ɪˈmjuː.t̬ə.bəl/ | not changing, or unable to be changed |
| drawback | /ˈdrɑː.bæk/ | a disadvantage or the negative part of a situation |
