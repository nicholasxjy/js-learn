//OOP
//call方法
//正常的情况下，函数体内的this关键字，总是指向函数运行时所在的那个对象。而函数的call方法
//可以改变this的指向对象，然后在调用该函数
//func.call(ontext, [arg1], [arg2], [arg3] ...)
//第一个参数就是this所要指向的对象，其后是所需参数，若果this所指对象为null undefined则等同于指定全局对象
var n = 123;
var o = {n: 456};
function a(){
	console.log(this.n);
}

a.call() //123
a.call(null) //123
a.call(undefined) //123
a.call(window) //123
a.call(o) //456

//apply方法
//apply也是改变this指向对象，不同的是第二个参数是一个数组，为函数的所需参数
//func.apply(context, [arg1, arg2, arg3 ...])
function f(x, y){
	return x+y;
}

f.call(null, 1, 1) // 2
f.apply(null, [1, 1]) // 2

//原型prototype对象
//构造函数 有一个prototype属性，指向一个对象，一般称为prototype对象
//定义在prototype对象上得属性和方法，被所有实例对象共享
function Animal(name) {
	this.name = name;
}
Animal.prototype.color = 'yellow';
var dog1 = new Animal('dog1');
var dog2 = new Animal('dog2');
dog1.color //yellow
dog2.color //yellow
//只要改变prototype就会立刻体现在实例对象上