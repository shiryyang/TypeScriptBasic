(function () {
    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log('动物在叫！')
        }
    }

    /**
     * Dog extends Animal
     *  - 此时Animal被称为父类，Dog被称为子类
     *  - 使用继承以后，子类将会拥有父类所有的方法和属性
     *  - 通过继承可以将多个类中共有的代码写在一个父类中
     *  - 这样只需要写一次即可让所有的子类都同时拥有父类中的属性
     *  - 如果希望在子类中添加一些父类中没有的属性或者方法直接加一个方法
     *  - 子类覆盖掉父类的方法，称为重写
     */

    // 定义一个表示狗的类
    // 使Dog类继承Animal类
    class Dog extends Animal{
        sayHello() {
            console.log('汪汪汪！')
        }
    }
    // 定义一个表示猫的类
    // 使Cat类继承Animal类
    class Cat extends Animal {
        sayHello() {
            super.sayHello();
        }
    }
    const dog = new Dog('旺财', 2)
    const cat = new Cat('咪咪', 3)
    console.log(dog)
    dog.sayHello()
    console.log(cat)
    cat.sayHello()
})()
