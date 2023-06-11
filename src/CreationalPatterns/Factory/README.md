# Factory Method pattern (工廠模式)

> The **_Factory Pattern_** is a creational design pattern that provides an interface for creating objects, but allows subclasses to decide which class to instantiate. It encapsulates the object creation logic in a separate component, know as the factory, which is responsible for creating instances of various related classes based on specific conditions or parameters.
> **工廠模式**是一種創建型的設計模式，它提供一個介面來創建物件，但允許子類別決定實例化哪個類別。它將物件創建的邏輯封裝在一個獨立的工廠組件中，該工廠負責根據特定條件或參數創建不同類別的實例。

## Concept

The main concept behind the Fatory Pattern is to abstract the process of object creation, decoupling the client code from the specific classes being instantiated, Instead of directly calling a constructor to create objects, the client interacts with the factory interface, which internally determines the appropriate class to instantiate and returns the desired object.

工廠模式的主要概念是抽象化物件創建的過程，將客戶端程式碼與類別的實例解耦。客戶端不再直接呼叫建構子來創建物件，而是與工廠介面互動，工廠介面內部會決定適當的類別來實例化並返回所需的物件。

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
  產品將會對介面進行聲明，對於所有創建者及子類構建的對象，這些介面都是通用的。
- **Concrete Products 實體產品**
  Concrete products are different implementations of the product interfaces.
  產品實體是產品介面的不同實現。
- **Creator 創建者**
  Creators declare factory methods that return product objects. The return type of these methods must match the product interface.
  創建者聲明一個返回產品物件的工廠方法，而返回的產品物件需要與產品介面互相匹配。
  You can declare the factory method as an abstract method, forcing each subclass to implement it differently. Alternatively, you can return a default product type in the base factory method.
  你可以將工廠方法聲明為抽象的方法，強制要求每個子類以不同方式實現該方法。或者，你也可以在基礎工廠的方法中返回預設的產品類型。
  Note that despite its name, the main responsibility of the creator is not creating products. Generally, the creator class contains core business logic related to the products. The factory method separates this logic from the concrete product classes. For example, a large software development company may have a programmer taining department. However, their primary work is coding, not producting programmers.
  注意，儘管它的名字是創建者，但它最主要的職責並不是創建產品。一般來說，創建者類型會包含一些與產品相關的核心業務邏輯，工廠方法將這些邏輯處理從具體產品類中分離出來。打個比方，大型軟體開發公司擁有工程師培訓部門，但這些公司的主要工作還是編寫程式碼，而非生產工程師。
- **Concrete Creators 實體創建者**
  Concrete creators override the base factory method to return different types of products.
  具體創建者將會複寫基本的工廠方法，使其返回不同類型的產品。
  Note that calling the factory method doesn't necessarily create new instance each time. The factory method can also return exisiting objects from a cache, object pool, or other sources.
  注意，並不是每次調用工廠方法都會創建新的實例，工廠方法也可以返回暫存的產品、產品池或其他來源已有的對象。

## Application Scenarios

- The client code needs to create objects of a certain type, but the exact class to instantiate may vary based on specific conditions or configurations.
  客戶端程式碼需要創建特定類型的物件，但根據特定條件或配置，需要實例化的確切類別可能會有所不同。
- The creation process of objects is complex or requires specific initialization steps. and it is beneficial to encapsulate this logic in a separate factory component.
  物件的創建過程複雜或需要特定的初始化步驟，將這個邏輯封裝在單獨的工廠組件中是有益的。
- The client code needs to work with objects through a common interface or base class, without being aware of the specific subclasses or their creation details.
  客戶端程式碼需要通過一個共同的介面或基類與物件進行操作，而不需要了解具體的子類或他們的創建細節。

## Pros and Cons

### Advantages

1. Encapsulation: The Factory encapsulates the object creation logic, providing a clear separation between the client code and the concrete classes being instantiated.
  封裝性：工廠封裝了物件的創邏輯，清晰地區分了客戶端程式碼和具體實例化的類別之間的關係。
2. Flexibility: By using a factory interface, the client code can easily switch between different implementations or variations of the created objects without modifying its own code.
  彈性：透過使用工廠介面，客戶端程式碼可以輕鬆切換不同的物件實現或變體，而無須修改自身的程式碼。
3. Code Organization: The Factory Pattern helps to organize and centralize the object creation logic, making the code base more maitainable and easier to understand.
  程式碼管理：工廠模式有助於組織和集中物件創建的邏輯，使程式碼庫更益於維護且更容易理解。

### Disadvantages

1. Increased Complexity: Intoducing a factory component adds an extra layer of abstraction, which may increase the overall complexity of the system.
  增加複雜度：引入工廠模式組件會增加額外的抽象層，這可能會增加系統的複雜度。
2. Dependency on the Factory: The client code becomes dependent on the factory interface, which can make the code less flexible if the factory interface needs to be modified.
  對工廠產生依賴：客戶端程式碼變得很依賴工廠，如果需要修改工廠介面，可能會使程式碼變得不靈活。
3. Runtime Overhaead: Depending on the implementation, the factory pattern may introduce some runtime overhead due to the additional indirection and object creation logic.
  效能問題：根據實作方式不同，工廠模式可能會因為需要額外或間接的操作和物件的創建邏輯，從而導致一些程式執行時的效能浪費，

---

In summary, the Factory Pattern is a design pattern that provides an interface for creating objects, allowing subclasses or implementations to decide which class to instantiate. It promotes encapsulation, flexibilty, and code organization, but it may also introduce complexity and runtime overhead. It is suitable for scenarios where object creation needs to be abstracted and varied based on specific conditions or configurations.

總結來說，工廠模式是一種設計模式，它提供了一個介面來創建物件，讓子類別或實作類別可以決定實體化哪個類別。它促進了封裝、彈性和程式碼組織，但同時可能引入複雜性和運行時開銷。它適用於需要將物件創建抽象化並根據特定條件或配置進行變化的情境。
