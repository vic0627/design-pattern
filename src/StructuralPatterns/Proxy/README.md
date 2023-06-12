# Proxy Pattern (代理模式)

> **Proxy Pattern** is a Structural design pattern that provides a surrogate or placeholder for another object to control access to it. In other words, it allows us to create a proxy object that acts as a subtitle for the real object. The proxy object can intercept requests from the client and perform additional tesks before or after forwarding the request to the real object.

> **代理模式**是一種結構型設計模式，它提供了一個代理或占位符，用於控制對另一個物件的訪問。換句話說，它允許我們創建一個代理物件，作為真實物件的替身。代理物件可以在將請求轉發給真實物件之前或之後，攔截客戶端的請求並執行額外的任務。

## Concept

The main concept behind the Proxy Pattern is to add a level of indirection between the client and the real object, providing a way to control and manage access to the object. The proxy object can be used to implement various behaviors such as lazy initialization, caching, access control, logging, and remote communication.

代理模式的主要概念是在客戶端和真實物件之間添加一層間接性，提供一種控制和管理對物件的存取的方式。代理物件可以用於實現各種行為，如延遲初始化、快取、存取控制、日誌記錄和遠程通訊。

## Structure and Components

```text
                +----------------------------+
                | interface ServiceInterface |    +--------+
                | + operation()              |<---| Client |
                +----------------------------+    +--------+
                              ^
                              |
                ------------------------------
                |                            |
+------------------------+          +---------------+
| Proxy                  |          | Service       |
| - realService: Service |<>------->| ...           |
| + Proxy(s: Service)    |---       | + operation() |
| + checkAccess()        |  |       +---------------+
| + operation()          |  |
+------------------------+  { realService = s; }
    |
    {
        if (checkAccess()) {
            realService.operation();
        }
    }
```

- **Service Interface 服務介面**
  The proxy must adhere to Service Interface in order to masquerade as a service.
  代理必須遵照服務介面的規格，才能偽裝成服務對象。
- **Service 服務實體**
  The Service class provides some useful business logic.
  服務的類別提供了一些業務邏輯。
- **Proxy 代理**
  The Proxy class contains a reference member variable pointing to the servie object. After perforiming its tasks (such as lazy initialization, logging, access control, and caching), the proxy passes the request to the service object.
  代理類別包含一個指向服務對象的成員變數，等代理完成任務(例如，延遲初始化、紀錄日誌、訪問控制與暫存等)後會將請求傳遞給服務實體。
  Typically, the proxy manages the entire lifecycle of its service objects.
  一般來說，代理會管理服務實體的整個生命週期。
- **Client 客戶端**
  The Client can interact with the service or the proxy through the same interface, allowing you to use the proxy in any code that requires a service object.
  客戶端可以通過相同的介面與服務實體或代理進行交互，所以可以在所有需要服務實體的程式碼中使用代理。

## Application Scenarios

- Virtual Proxies: When we want to create wxpensive objects only when they are actually needed. The proxy object can create the real object on-demand, thereby improving performance.
  虛擬代理：當我們只在實際需要時才想要創建昂貴的物件時，可以使用虛擬代理。代理物件可以按需創建真實物件，從而提高性能。
- Protection Proxies: When we want to control access to sensitive or private objects. The proxy object can check the permissions or credentials of the client before allowing access to the real object.
  保護代理：當我們希望控制對敏感或私有物件的訪問時，可以使用保護代理。代理物件可以在允許訪問真實物件之前檢查客戶端的權限或憑證。
- Remote Proxies: When we want to provide a local representation of an object that resides in a different address space or on a remote server. The proxy object can handle communication details and make remote calls on behalf of the client.
  遠程代理：當我們希望提供在不同地址空間或遠程伺服器上存在的物件的本地表示時，可以使用遠程代理。代理物件可以處理通訊細節，並代表客戶端進行遠程調用。

## Pros and Cons

### Advantages

1. Separation of Concerns: The proxy object provides a clear separation between the client and the real object, allowing each to focus on their specific responsibilities.
  職責分離：代理物件提供了客戶端和真實物件之間的明確分離，使得各自可以專注於它們特定的責任。
2. Enhanced Security: The proxy object can add an extra layer of security by controlling access to the real object and performing authentication or authorization checks.
  增強安全性：代理物件可以通過控制對真實物件的訪問並執行驗證或授權檢查，增加一層額外的安全性。
3. Improved Performance: The proxy object can optimize the access to the real object by performing caching, lazy initialization, or other optimization techniques.
  改善效能：代理物件可以通過執行緩存、延遲初始化或其他優化技術來優化對真實物件的訪問，從而提升效能。

### Disadvantages

1. Increased Complexity: Introducing a proxy object adds an additional of complexity to the system, which may make the codebase more diffcult to understand and maintain.
  複雜度增加：引入代理物件會增加系統的複雜度，可能使程式碼庫更難理解和維護。
2. Potential Overhead: The proxy object can introduce some overhead due to the additional checks or operations it performs before delegating to real object. This overhead may impact performance.
  可能有額外的開銷：代理物件在委派給真實物件之前可能需要執行一些額外的檢查或操作，這可能會增加開銷並影響效能。
3. Limited Functionality: Depending on the specific use case, the proxy object may not provide the full functionality to the real object. Some operations or features may not be available through the proxy.
  功能有限：根據特定使用情境，代理物件可能無法提供完整的功能給真實物件。某些操作或功能可能無法透過代理物件使用。

---

In summary, the Proxy Pattern is a design pattern that allows us to control access to an object by providing a surrogate or placeholder. It offers flexibility, security, and performance improvements, but it also introduces complexity and potential overhead. It is suitable for scenarios where we need to manage access to objects or add additional behaviors without modifying the existing code.

總結而言，代理模式是一種設計模式，它允許我們透過提供一個代理或占位符來控制對物件的訪問。它提供了靈活性、安全性和性能改進，但同時也引入了複雜性和潛在的開銷。它適用於需要管理對象訪問或在不修改現有程式碼的情況下添加額外行為的情境。
