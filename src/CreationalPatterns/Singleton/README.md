# Singleton pattern (單例模式)

> Singleton Pattern is a creational pattern that restricts the instantiation of a class to a single object and provides global access to that instance. It ensures that there is only one instance of a class throughout the application.
> 單例模式是一種創建型模式，限制了類別的實例化只能產生一個物件，並提供對該實例的全域存取。它確保了只會有一個類別的實例存在於應用程式中。

## Concept

The key concept of theSingleton Pattern is to have a class that is responsible for creating its own unique instance and providing a global point of access to that instance. It typivally involves vreating a private constructor to prevent external instantiation and a static method to provide access to the single instance.

單例模式關鍵概念，是擁有一個負責創建其獨特實例，並提供全局訪問點的類別。一般來說，這裡會使用「私有構造函數」來防止外部實例化，並提供一個靜態方法來訪問該單一實例。

## Structure and Components

```text
+----------------------------+
| Singleton                  |<--┐
| - instance: Singleton      |---┘
| - Singleton()              |    +--------+
| + getInstance(): Singleton |<---| Client |
+----------------------------+    +--------+
  |
  .getInstance() {
      if (this.instance === null) {
          this.instance = new Singleton();
      }
      return this.instance
  }
```

- **Singleton**
  The Singleton class declares a static method named `getInstance` to  obtain an  instasnce of the class, which returns the same instance of the class.
  單利的類別聲明了一個名為`getInstance`的靜態方法，該方法會返回一個等同於其所屬類別的相同實例。
  The constructor of the Singleton must be hidden from the client code. The method call must be the only way to obtain the Singleton object.
  單例的構造函數必須對客戶端隱藏代碼，調用`getInstance`必須是獲取單例對象的唯一方式。

## Application Scenarios

- When there should be only one instance of a class that needs to be shared by multiple parts of the system.
  當系統多個部分需要共享同一個類別或唯一的實例。
- When global access to an object is required, such as a database connection, thread pool, or configuration settings.
  當需要全域訪問一個物件時。例如，資料庫連接、執行續池或配置設定。
- When lazy initialization of the object is desired to improve performance or resource usage.
  當希望延遲初始化物件以調高效能或資源使用時。

## Pros and Cons

### Advantages

1. Single instance: The Singleton Pattern ensures that there is only one instance of a class, providing a global point of access to it.
  單一實例：單例模式確保一個類別只有一個實例，並提供一個全域的訪問點。
2. Global access: The single instance can be accessed globally, allowing different parts of the system to use it easily.
  全域訪問：單一實例可以全域訪問，讓系統的不同部分可以輕鬆使用它。
3. Lazy initialization: The Singleton can be lazily initialized, meaning that the instance is created only when it is first needed, improving performance and resource usage.
  延遲初始化：單例可以延遲初始化，也就是在第一次需要時才創建實例，提升效能和資源使用效率。
4. Thread safety: With proper implementation, the Singleton Pattern can provide thread-safe access to the single instance.
  線程安全：適當實現的單例模式可以提供對單一實例的線程安全訪問。

### Disadvantages

1. Global state: The use of a Singleton introduces global state into the application, which can make the code harder to test an maintain.
  全域狀態：使用單例模式會引入全域狀態到應用程式中，這可能使程式碼難以進行測試和維護。
2. Tight coupling: Classes that depand on the Singleton become tightly coupled to it, which can make the code less flexible and harder to modify.
  緊密耦合：依賴於單例的類別與之緊密耦合，這可能使程式碼較不靈活且難以修改。
3. Hidden dependencies: The use of a Singleton can hide dependencies and make it harder to reason about the flow of data and control in the application.
  隱藏依賴：使用單例可能隱藏依賴關係，使得在應用程式中難以理解數據流和控制流。

---

Overall, the Single Pattern provides a way to ensure that there is only one instance of a class and enables global access to that instance. It is useful in scenarios where a single, shared resource needs to be managed throughout the application. However, it should be used judiciously, considering the potential drawbacks of global state and thght coupling.

整體而言，單例模式提供了一種確保只有一個類別實例存在並允許全域存取該實例的方式。它在需要在整個應用程式中管理單一共享資源的情境中非常有用。然而，應該謹慎使用此模式，考慮到全域狀態和高耦合性可能帶來的潛在缺點。
