# 设计模式

以下是几个常见的设计模式，以及它们的优缺点、适用场景和示例代码：

**1. 工厂模式（Factory Pattern）：**

- 优点：封装创建过程，降低耦合性，提供灵活性和可扩展性。
- 缺点：增加代码复杂性，需要创建工厂类。
- 适用场景：根据不同条件创建不同对象，或隐藏创建细节。

示例代码：

```javascript
class Button {
  constructor(text) {
    this.text = text;
  }
  render() {
    console.log(`Rendering button with text: ${this.text}`);
  }
}

class ButtonFactory {
  createButton(text) {
    return new Button(text);
  }
}

const factory = new ButtonFactory();
const button = factory.createButton("Submit");
button.render(); // Output: Rendering button with text: Submit
```

**2. 单例模式（Singleton Pattern）：**

- 优点：确保唯一实例，节省资源，提供全局访问点。
- 缺点：可能引入全局状态，不利于扩展和测试。
- 适用场景：需要全局唯一实例时，如日志记录器、配置对象等。

示例代码：

```javascript
class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = this;
  }
  log(message) {
    console.log(`Logging: ${message}`);
  }
}

const logger1 = new Logger();
const logger2 = new Logger();

console.log(logger1 === logger2); // Output: true
```

**3. 观察者模式（Observer Pattern）：**

- 优点：实现松耦合，支持广播通信，状态改变时通知依赖对象。
- 缺点：可能导致性能问题和内存泄漏，需管理观察者列表。
- 适用场景：对象间一对多关系，一个对象改变需通知多个对象。

示例代码：

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  notify(message) {
    this.observers.forEach((observer) => observer.update(message));
  }
}

class Observer {
  update(message) {
    console.log(`Received message: ${message}`);
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notify("Hello, observers!"); // Output
```

**4. 发布订阅模式（Publish-Subscribe Pattern）：**

- 优点：解耦发布者和订阅者，增加灵活性和可维护性。
- 缺点：可能导致过度发布消息，造成性能问题，订阅者需管理订阅和取消订阅逻辑。
- 适用场景：一对多关系，一个对象状态变化需通知多个其他对象。

示例代码：

```javascript
class PubSub {
  constructor() {
    this.subscribers = {};
  }
  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
  }
  unsubscribe(event, callback) {
    const subscribers = this.subscribers[event];
    if (subscribers) {
      this.subscribers[event] = subscribers.filter((cb) => cb !== callback);
    }
  }
  publish(event, data) {
    const subscribers = this.subscribers[event];
    if (subscribers) {
      subscribers.forEach((callback) => callback(data));
    }
  }
}

// 创建发布订阅对象
const pubsub = new PubSub();

// 订阅事件
const callback1 = (data) => console.log("Subscriber 1:", data);
const callback2 = (data) => console.log("Subscriber 2:", data);
pubsub.subscribe("event1", callback1);
pubsub.subscribe("event1", callback2);

// 发布事件
pubsub.publish("event1", "Hello, world!");

// 取消订阅事件
pubsub.unsubscribe("event1", callback2);

// 再次发布事件
pubsub.publish("event1", "Hello again!");
```

在上述示例中，`PubSub` 是发布订阅的实现类，它维护一个订阅者列表 `subscribers`，用于存储不同事件的订阅者列表。通过 `subscribe` 方法订阅事件，将回调函数添加到对应事件的订阅者列表中；通过 `unsubscribe` 方法取消订阅事件，从对应事件的订阅者列表中移除回调函数；通过 `publish` 方法发布事件，遍历对应事件的订阅者列表，依次执行回调函数。通过发布订阅模式，发布者和订阅者之间解耦，可以实现松散耦合的组件间通信。

发布订阅模式适用于许多场景，如事件驱动的系统、消息队列、UI 组件间的通信等，可以实现组件之间的解耦和灵活性。

**发布订阅模式（Publish-Subscribe Pattern）和观察者模式（Observer Pattern）是两种常见的设计模式，它们有一些相似之处，但也存在一些区别。**

相似之处：

- 都用于实现对象之间的消息通信和事件处理。
- 都支持解耦，让发布者和订阅者（观察者）之间相互独立。

区别：

- 关注点不同：观察者模式关注的是一个主题对象（被观察者）和多个观察者对象之间的关系。当主题对象的状态发生变化时，它会通知所有观察者对象进行更新。而发布订阅模式关注的是发布者和订阅者之间的关系，发布者将消息发送到一个中心调度器（或者称为事件总线），然后由调度器将消息分发给所有订阅者。
- 中间件存在与否：发布订阅模式通常需要一个中间件（调度器或事件总线）来管理消息的发布和订阅，这样发布者和订阅者之间的通信通过中间件进行。而观察者模式则直接在主题对象和观察者对象之间进行通信，没有中间件的参与。
- 松散耦合程度不同：观察者模式中，主题对象和观察者对象之间是直接关联的，主题对象需要知道每个观察者对象的存在。而在发布订阅模式中，发布者和订阅者之间并不直接关联，它们只与中间件进行通信，发布者和订阅者之间的耦合更加松散。

观察者模式示例：

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log("Received data:", data);
  }
}

// 创建主题对象
const subject = new Subject();

// 创建观察者对象
const observer1 = new Observer();
const observer2 = new Observer();

// 添加观察者
subject.addObserver(observer1);
subject.addObserver(observer2);

// 发送通知
subject.notify("Hello, observers!");
```

发布订阅模式示例：

```javascript
class EventBus {
  constructor() {
    this.subscribers = {};
  }
  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
  }
  unsubscribe(event, callback) {
    const subscribers = this.subscribers[event];
    if (subscribers) {
      this.subscribers[event] = subscribers.filter((cb) => cb !== callback);
    }
  }
  publish(event, data) {
    const subscribers = this.subscribers[event];
    if (subscribers) {
      subscribers.forEach((callback) => callback(data));
    }
  }
}

// 创建事件总线对象
const eventBus = new EventBus();

// 订阅事件
eventBus.subscribe("message", (data) => {
  console.log("Received message:", data);
});

// 发布事件
eventBus.publish("message", "Hello, subscribers!");
```

在上述示例中，观察者模式中的 Subject 类相当于发布订阅模式中的 EventBus 类，Observer 类相当于订阅者（观察者），notify 方法相当于 publish 方法，update 方法相当于订阅者接收到事件后的回调函数。

观察者模式和发布订阅模式都是常见的用于实现事件处理和消息通信的设计模式，根据实际场景和需求选择合适的模式进行使用。观察者模式更加简单直接，适用于一对多的关系，而发布订阅模式更加灵活，可以支持多对多的关系，并且通过中间件来解耦发布者和订阅者。

**4. 原型模式（Prototype Pattern）：**

- 优点：通过克隆现有对象创建新对象，避免频繁创建，提高性能。
- 缺点：需正确设置原型对象和克隆方法，可能引入深拷贝或浅拷贝问题。
- 适用场景：创建对象成本大且对象间相似度高时，复用已有对象。

示例代码：

```javascript
class Shape {
  constructor() {
    this.type = "";
  }
  clone() {
    return Object.create(this);
  }
  draw() {
    console.log(`Drawing a ${this.type}`);
  }
}

const circlePrototype = new Shape();
circlePrototype.type = "Circle";

const squarePrototype = new Shape();
squarePrototype.type = "Square";

const circle = circlePrototype.clone();
circle.draw(); // Output: Drawing a Circle

const square = squarePrototype.clone();
square.draw(); // Output: Drawing a Square
```

**6. 装饰者模式（Decorator Pattern）**

- 优点：动态添加功能，避免类爆炸问题。
- 缺点：增加代码复杂性，需管理和理解装饰器层次结构。
- 适用场景：不修改对象结构，动态添加功能或修改行为。

示例代码：

```javascript
class Component {
  operation() {
    console.log("Component operation");
  }
}

class Decorator {
  constructor(component) {
    this.component = component;
  }
  operation() {
    this.component.operation();
  }
}

class ConcreteComponent extends Component {
  operation() {
    console.log("ConcreteComponent operation");
  }
}

class ConcreteDecoratorA extends Decorator {
  operation() {
    super.operation();
    console.log("ConcreteDecoratorA operation");
  }
}

class ConcreteDecoratorB extends Decorator {
  operation() {
    super.operation();
    console.log("ConcreteDecoratorB operation");
  }
}

const component = new ConcreteComponent();
const decoratorA = new ConcreteDecoratorA(component);
const decoratorB = new ConcreteDecoratorB(decoratorA);

decoratorB.operation();
// Output:
// Component operation
// ConcreteComponent operation
// ConcreteDecoratorA operation
// ConcreteDecoratorB operation
```

**7. 适配器模式（Adapter Pattern）：**

- 优点：允许不兼容接口的对象协同工作，提高复用性和灵活性。
- 缺点：增加代码复杂性，需理解和管理转换过程。
- 适用场景：将一个类的接口转换为客户端期望的另一个接口。

示例代码：

```javascript
class Target {
  request() {
    console.log("Target request");
  }
}

class Adaptee {
  specificRequest() {
    console.log("Adaptee specificRequest");
  }
}

class Adapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }
  request() {
    this.adaptee.specificRequest();
  }
}

const target = new Target();
target.request();
// Output: Target request

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
adapter.request();
// Output: Adaptee specificRequest
```

在上述示例中，`Target` 定义了客户端所期望的接口，`Adaptee` 是一个已有的类，它的接口与 `Target` 不兼容。适配器 `Adapter` 继承自 `Target`，并在其内部持有一个 `Adaptee` 的引用，通过适配器的 `request` 方法调用 `Adaptee` 的 `specificRequest` 方法，从而实现了对不兼容接口的适配。客户端可以通过调用适配器的 `request` 方法来使用 `Adaptee` 的功能。

适配器模式可以用于许多场景，例如在使用第三方库时需要将其接口转换成符合自己代码规范的接口，或者在对旧系统进行重构时需要兼容旧代码和新代码之间的差异。
