(function () {
    type myType = {
        name: string,
        age: number
    }

    /**
     * 接口用来定义一个类的结构，用来定义类中应该包含哪些属性和方法
     * 同时接口也可以当成类型声明去使用
     */
    interface myInterface {
        name: string;
        age: number
    }
    interface myInterface {
        gender: string
    }
    const obj: myInterface = {
        name: 'sss',
        age: 10,
        gender: '男'
    }

    /**
     * 接口可以在定义类的时候去限制类的结构
     * 接口中的所有属性都不能有实际的值
     * 接口与只定义对象的接口，而不考虑实际值
     * 在接口中所有的方法都是抽象方法
     */
    interface myInter {
        name: string;
        sayHello():void
    }

    /**
     * 定义类时，可以使类去实现一个接口
     * 实现接口就是使类满足接口的要求
     */
    class MyClass implements myInter {
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        sayHello() {
            console.log('大家好~')
        }
    }

})()
