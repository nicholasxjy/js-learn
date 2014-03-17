//数组
//任意类型 都可以放入数组
var a = [{o: 1}, [1,2,3], function() {return true;}];

//数组的length属性 可以修改
a.length = 2;
a // [{o: 1}, [1,2,3]]

//Array构造函数
var a = new Array();
a // []
a.length // 0

var b = new Array(1);
b //[undefined]
b.length // 1

var c = new Array(1,3);
c // [1,3]
c.length // 2

// 函数 （重点）

function print() {

}
//右边匿名函数， 赋值给变量print
var print = function(){

}

//函数名提升 
f();
function f(){

}
//类似变量提升，上面代码不会报错，function 声明函数会被提升到代码头
//但是下面的会报错
f();
var f = function f(){}
//等价于
var f;
f();
f = function f(){}
//如果同时采用 两种定义，最后总是采用赋值语句的定义，如下
var f = function(){
	console.console.log("1");
}
function f(){
	console.log("2");
}
f(); // 1


//函数作用域  指的是变量的作用范围
//javascript只有两种  全局作用域  和  函数作用域
//在函数外部声明的 都是全局变量 在函数内部可以读取
var v = 1;
function f(){
	console.log(v);
}
f(); // 1
// 在函数内部定义的变量会覆盖全局变量，而且外部无法读取
var v = 1；
function f(){
	var v = 2;
	console.log(v);
}
f(); // 2
v // 1

//函数竟然有length属性的
function f(a,b){
	return a+b;
}
f.length // 2参数的个数

//下面一个 解答了电话面试的一个问题  参数传递
//函数参数的传递 是传值传递，也就说函数内部修改，不会影响外部的
var p = 1;
function f(p){
	p = 2;
}
f(p);
p // 1
//紧接上面 复合类型的参数 则为传址传递，函数内修改，影响原来
var  o = {p: 1};
var  a = [1,3,4]
function f(o, a){
	o.p = 3;
	a[0] = 5;
} 
f(o);
o.p // 3
a  // [5, 3, 4]

//来难懂的了 ， 闭包
//闭包 ：定义在函数体内的函数   闭包是函数与其生成时与其所在作用域对象的一种结合
function f(){
	var c = function(){};
}
// c 就是闭包
//闭包特点在于  可以在函数外部读取函数内的变量
function f(){
	var v = 1;
	var c = function(){
		return v;
	}
	return c;
}

var fun = f();
fun(); // 1
//下面这个例子，我以前就了解，这次是深刻了
function createIncrecement(start){
	return function(){
		return start++;
	}
}

var inc = createIncrecment(5);
inc() // 5
inc() // 6
inc() // 7

//有解决了以前的 nodejs那边一个疑惑
(function (){}())//也可以这样写
(function (){})()
//这叫 立即调用的函数表达式IIFE(immediately-invoked function expression)

//只听说过eval的 不好，今天晓得了它是什么
eval('var a = 1;')//eval就是将字符串处理成表达式，它没有作用域，所以它可能污染我们变量