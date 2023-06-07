# Proxy Pattern (代理模式)

> Proxy Pattern is a Structural design pattern that provides a surrogate or placeholder for another object to control access to it. In other words, it allows us to create a proxy object that acts as a subtitle for the real object. The proxy object can intercept requests from the client and perform additional tesks before or after forwarding the request to the real object.

## Concept

The main concept behind the Proxy Pattern is to add a level of indirection between the client and the real object, providing a way to control and manage access to the object. The proxy object can be used to implement various behaviors such as lazy initialization, caching, access control, logging, and remote communication.

## Application Scenarios

- Virtual Proxies: When we want to create wxpensive objects only when they are actually needed. The proxy object can create the real object on-demand, thereby improving performance.
- Protection Proxies: When we want to control access to sensitive or private objects. The proxy object can check the permissions or credentials of the client before allowing access to the real object.
- Remote Proxies: When we want to provide a local representation of an object that resides in a different address space or on a remote server. The proxy object can handle communication details and make remote calls on behalf of the client.

## Pros and Cons

### Advantages