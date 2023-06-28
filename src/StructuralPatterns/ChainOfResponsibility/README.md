# Chain of Responsibility pattern (責任鏈模式)

> The **Chain of Responsibility** pattern is a behavioral design pattern that allows an object to pass a request along a chain of potential handlers until the request is handled or reaches the end of the chain. It decouples the sender of the request from the reciever by giving multiple objects the opportunity to handle the request.

## Concept

The main concept behind the Chain of Responsibility pattern is to create a chain of handler objects, where each handler has a reference to the next handler in the chain. When a request is made, it is passed through the chain until a handler is found that can handle the request. Each handler decides whether to handle the request or pass it to the next handler in the chain.

## Structure and Components

```text
    +-----------------------+       +--------+
 ┌->| interface Handler     |<------| Client |
 |  | + setNext(h: Handler) |       +--------+
 |  | + handle(request)     |           |
 |  +-----------------------+           {
 |              ^                           h1 = new HandlerA()
 |              |                           h2 = new HandlerB()
 |  +-----------------------+               h3 = new HandlerC()
 |  | BaseHandler           |               h1.setNext(h2)
 └<>| - next: Handler       |               h2.setNext(h3)
    | + setNext(h: Handler) |               // ...
    | + handle(request)     |---┐           h1.handle(request)
    +-----------------------+   |       }
                ^               |
                |               └---{
    +-----------------------+           if (next != null)
    | ConcreteHandlers      |+              next.handle(request)
    | ...                   ||      }
    | + handle(request)     ||--┐
    +-----------------------+|  └---{
     +-----------------------+          if (canHandle(request)) {
                                            // ...
                                        } else {
                                            parent::handle(request)
                                        }
                                    }
```

1. **Handler 處理程序**
   The Handler declares the common interface for all concrete handlers. This interface typically includes a single method for request handling, but sometimes it may also include a method for setting the next handler in the chain.
2. **Base Handler 基礎處理程序**
   The Base Handler is an optional class where you can place the shared code among handlers. Typically, this class defines a member variable to hold a reference to the next handler in the chain. The client can create the chain by passing handlers to the constructor or setter method of the previous handler. This class can also implement default handling behavior by checking if the next handler exists before passing the request to it.
3. **Concrete Handlers 處理程序實體**
   The Concrete Handlers contain the actual code for handling requests. Each handler, upon receiving a request, must decide whether to handle it and whether to pass it along the chain.
   Handlers are typically independent and immutable, requiring all necessary data to be provided through their contructor.
4. **Client 客戶端**
   The Client can generate the chain of handlers either statically or dynamically based on the program logic. It's important to note that a request can be sent to any handler in the chain, not necessarily the first one.
