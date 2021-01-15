// 字面量

let a: 10;
a = 10

let b: 'male' | 'female'
b = 'male'
b = 'female'

let c: boolean | string
c = true
c = 'hello'

// 一个类型设置any，相当于对该变量关闭了Ts的类型检测
// 不建议使用
let d: any
d = '1'
d = 1

let e: unknown
e = 1
e = '321'
// e = 3

let s:string
// s = d
// s = e

if (typeof e === 'string') {
    s = e
}
// 类型断言，可以告诉编译器变量实际类型
s = e as string
s = <string>e
// void表示没有返回值 null/undefined
function fn1():void {
    return null
}
// never 表示永远不会返回值
function fn2():never {
    throw new Error('报错了')
}