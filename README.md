## 使用
该工程包含引用的外部子模块，所以在clone到本地之后需要装载子模块
初始化：
    
        git submodule init
        git submodule update

测试：
        
        npm install -g mocha
        npm test

## 注解demo
该工程主要是node-annotation使用实例，要跑起来需要依赖node-annotation工程和node-annotation-extend工程。
-----------
### AOP
演示了如何使用切面编程
### DI
演示了如何使用依赖注入
### hierarchy
展示注解加载树
### webApp
一个作为服务的项目的使用
