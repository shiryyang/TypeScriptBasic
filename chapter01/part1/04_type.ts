let a:object
a = {}
a = function () {

}

// {}用来指定对象中可以包含哪些属性
// 属性名后加上一个?，表示属性是可选的
let b: {name:string, age?:number}
b = {name: '1'}

// [propName:string]:any 表示任意类型的属性
let c: {name:string, [propName: string]: any}
c = {name: '1', age: 2, gender: '男'}

/**
 *设置函数结构的类型声明
 * 语法：（形参：类型）=>类型
 **/
let d: (a:number,b:number)=>number
d = function (n1, n2) {
    return n1 + n2
}
/**
 * 数组的类型声明
 * type[]
 * number[]
 */
let e: string[]
e = ['a', 'b']

let f: number[]
f = [1, 2]

let g:Array<number>
g = [1, 2, 3]

/**
 * 元组，元组是固定长度的数组
 * 语法[类型， 类型， 类型]
 */
let h: [string, string];
h = ['hello', 'abc']

/*
* enum 枚举
* */
enum Gender {
    Male,
    Female
}
let i: {name: string, gender:Gender}
i = {
    name: 'h',
    gender: Gender.Male
}
// &表示同时
let j: { name: string } & { age: number }

// 类型的别名
type myType =  1 | 2 | 3 | 4
let k: 1 | 2 | 3 | 4
let l: 1 | 2 | 3 | 4
let m: myType