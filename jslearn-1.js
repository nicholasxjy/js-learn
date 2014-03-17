//标签的使用
top:
	for(var i=0 ; i<10; i++) {
		for(var j=0; j<10; j++) {
			if (i===1 && j===1) break top;
			console.log("i="+i+", j="+j);
		}
	}
//此处的标签，满足条件时，会跳出外层循环；不加标签top，只会跳出内层的循环
top:
	for(var i=0; i<10; i++) {
		for(var j=0; j<10; j++) {
			if (i===1 && j===1) continue top;
			console.log("i="+i+", j="+j);
		}
	}
//此处的top标签，在符合条件时，会从外层循环继续，否则只会继续内层循环

//javascript值共有6中类型和两个特殊值
//总共又可以分为两组 原始类型和合成类型
//原始类型包括：数值(number)字符串(string) 布尔值(boolean)
//合成类型包括：对象(object) 数组(array) 函数(function)

//两个特殊值null和undefined
//null 表示不应该有值 而undefined"未定义"，应该有值，但是没有定义
typeof null //'object'
//三种常见的undefined
var a//1.变量只声明但没有赋值
this.foo//2.读取对象不存在的属性
(function f() {})()//3.运行没有返回语句的函数

//5中为false情况
false
0
""
null
undefined//[], {}都为true

//javascript有3种方法可以判断类型
typeof
instanceof()
Object.prototype.toString()
//typeof
typeof 3//"number"
typeof "hello"//"string"
typeof false //"boolean"
typeof undefined //"undefined"
function f() {}
typeof f //"function"
typeof NaN//"number"

typeof []//"object"
typeof {}//"object"
typeof null//"object"
//上面怎么区分[] {}
var a =[]
var b = {}
a instanceof Array//true
b instanceof Array//false
