# node-annotation-example

> 该工程包含了node-annotation的演示实例以及相关的单元测试与一些性能测试结果。
>
> 需依赖[node-annotation](https://github.com/Robinlim/node-annotation)与[node-annotation-extend](https://github.com/Robinlim/node-annotation-extend)

## 测试      

> 由于其中部分测试会在本地模拟请求，可能会耗时较长，可视情况调整mocha的-t(timeout)参数

        npm install
        npm install -g mocha
        npm test

## 实例
### AOP
> 演示了如何使用切面编程

```
node example/AOP/Main
```

### DI

> 演示了如何使用依赖注入

```
node example/DI/Main
```

### fiber

> 展示了Async／Await式的同步风格的异步编程

```
node example/fiber/main
```

### hierarchy

> 展示注解加载树

```
node example/hierarchy/Hierarchy
```

### webApp

> 一个作为服务的项目的使用，主要展现了业务分层注解尤其是Controller内的注解使用。

```
node example/webApp/app
```

