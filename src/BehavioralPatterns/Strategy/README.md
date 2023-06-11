# Strategy Pattern (策略模式)

> **Strategy Pattern** is a behavioral design pattern that enables an object to dymaically change its behavior at runtime by encapsulating a set of algorithms and making them interchangeable. It allows the algorithms to vary independently from the clients that use them.
> **策略模式**是一種行為設計模式，他能讓你定義一系列的算法，並將每種算法分別放入獨立的類別，使算法的對象能夠互相替換。

## Concept

The key concept of the Strategy Pattern is the separation of behavior (algorithms) from the context (object using the algorithms). It promotes composition over inheritance and enables the clients to choose the algorithm dynamically without tightly coupling them to specific implementations.

策略模式的核心概念是將不同的算法封裝成獨立的類別，並且讓這些類別實現共同的介面。這樣，使用算法的客戶端程式碼可以通過介面引用不同的策略類別，而不需要知道具體的實現細節。在運行時，可以根據需要動態地切換策略。

## Structure and Components

```text
+-------------------------+          +--------------------+
| Context                 |          | interface Strategy |
| - strategy: Strategy    |<>------->| + execute(data)    |
| + setStrategy(strategy) |          +--------------------+
| + doSomething()         |             ^
+-------------------------+             |
  ^   |                                 |
  |   {                                 |
  |     strategy.execute();             |
  |   }                                 |
  |                                     +---------------------+
  +--------+                            | Concrete Strategies |+
  | Client |--------------------------->| ...                 ||
  +--------+                            | + execute(data)     ||
    |                                   +---------------------+|
    |                                    +---------------------+
    {
      const ctx = new Context();
      const strA = new StrategyA();
      const strB = new StrategyB();
      ctx.setStrategy(strA);
      ctx.doSomething();
      ctx.setStrategy(strB);
      ctx.doSomething();
    }
```

- **Context 上下文**
  The Context maitains a reference to a specific strategy and communicates with it sloey through the strategy interface.
  上下文持續引用一個特定的策略，且僅通過策略的介面與該策略進行交流。
- **Strategy 策略**
  The Strategy interface is a common interface for all concrete strategies. It declares a method for the context to execute the strategy.
  策略介面是所有策略實體的共通介面，它聲明了一個方法給上下文來執行。
- **Concrete Strategies 策略實體**
  Concrete Startegies implements various different variants of algorithms used by the context.
  策略實體實現了各種不同的策略變體，並提供算法給上下文。
- **Client 客戶端**
  The Client creates a specific strategy object and passes it to the context. The context provides a setter to allow the client to replace the associated strategy at runtime.
  客戶端創建了一個特定的策略物件，並帶入給上下文。上下文會提供一個 setter，並允許客戶端在程式執行時替換與其連接的策略。

*When the context needs to run an algorithm, it invokes the execute method on the strategy object it is connected to. The context is unaware on the specific strategy type and how the algorithm is executed.*

*當上下文需要運行算法時，它會在與它連結的策略對象上調用執行方法，而上下文本身不會知道其所涉及的策略類型與算法的執行方式。*

## Application Scenarios

- When multiple algorithms or strategies are available for solving a problem, and the client needs the flexibility to switch between them at runtime.
- When there is a need to isolate the algorithm implementation details from the client code.
- When a class has multiple conditional statements that can be replaced with different strategies.

- 替換算法：當需要在不同的算法之間進行替換時，策略模式非常有用。例如，對於排序操作，可以根據數據及的大小或類型選擇不同的排序算法，如快排、冒泡或合併等排序方式。
- 表單驗證：在表單驗證過程當中，可以使用策略模式來定義不同的驗證策略。例如，驗證電子郵件地址可以用正規表達式，而驗證電話號碼時可以切換檢查特定格式的策略。
- 圖像處理：在圖像處理的應用中策略模式可以用於實現不同的濾淨效果。每個濾鏡可以作為一個策略，用戶可以選擇應用哪個策略來修改圖像。
- 路由選擇：在網路路由器應用或負載均衡器中，策略模式可以用於根據不同的條件選擇最佳路由策略。例如，根據數據包大小、網路流量或目的地等等條件，選擇最適合的路由策略。
- 促銷活動：在電子商務系統中，可以使用策略模式來實現不同的促銷活動。每個促銷活動可以作為一個策略，根據用戶購買的行為、商品類型或優惠券等條件來選擇適用的促銷策略。

## Pros and Cons

### Adventages

1. Encapsulates algorithms: The strategy pattern encapsulates different algorithms or strategies, making them easily interchangeable.
  封裝算法：策略模式將不同的算法或策略封裝起來，使他們可以輕鬆地互換使用。
2. Promotes code reuse: Strategies can be reused across different contexts without modifying the client code.
  促進代碼重用：策略可以在不修改客戶端代碼的情況下在不同的上下文中重用。
3. Enables runtime flexibility: The client can switch between strategies dynamically at runtime without affecting the overall system behavior.
  實現代碼運行時的靈活性：客戶端可以在運行時動態切換策略，而不會影響整個系統的行為。
4. Simplifies maintenance: Adding or modifying strategies does not require changes to the client code, which simplifies maintenance and reduces the risk of introducing bugs.
  簡化維護：添加或修改策略不需要對客戶端代碼進行更改，簡化了維護工作並減少引入錯誤的風險。

### Disadvantages

1. Increased number of classes: Implementing the strategy pattern may lead to an increased number of classes, especially when there are many strategies involved.
  類別數目增加：實現策略模式可能會導致類別數目增加，特別是當涉及到多個策略時。
2. Potential performance impact: The strategy pattern may introduce overhead due to the additional layer of abstraction and indirection.
  潛在的性能影響：策略模式可能會引入額外的抽象和間接層，這可能會對性能產生影響。

---

Overall, the Strategy Pattern provides a flexible and reusable way to manage algorithms and behaviors in an object-oriented system. It promotes code flexibility, extensibility, and maintenance ease. However, it should be used judiciously, considering the trade-offs in terms of code complexity and performance.

總體來說，策略模式在物件導向系統中提供了管理算法和行為的一種具靈活性且可重複使用的方式。它促進了代碼的彈性、擴充性及可維護性。然而，在考慮到代碼的複雜度和性能之間的平衡時，應謹慎使用。
