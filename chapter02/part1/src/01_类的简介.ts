// 使用class关键字来定义一个类
/**
 * 对象中主要包含两个部分
 * 属性
 * 方法
 */
class Person {
    // 定义属性
    name: string = '孙悟空';
    // 在属性前使用static关键字可以定义类属性（静态属性）
    static age: number = 18;
    // 只读属性
    readonly sex: string = '女';

    //定义方法
    sayHello() {
        console.log('Hello 大家好')
    }
    // 类方法
    static staticFun() {
        console.log('类方法')
    }
}

const per = new Person()
console.log(per)
console.log(Person.age)
per.sayHello()
Person.staticFun()
