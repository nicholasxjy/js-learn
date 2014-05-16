//对象 一种无序的数据集合，有若干键值对组成
var ob = {
	p: "hello world",
	q: function(x) {return 2*x;}
};
//键 统称为属性，如果值为函数，则对应的属性 被称为 方法

//对象的生成方法
var o = {};
var o = new Object();
var o = Object.create(null);

Object.keys(ob) //["p", "q"]

//属性的增加和删除
var o = {};
o.p = 1;
//删除可以赋值为undefined
o.p = undefined;//或者用
delete o.p;

//对象引用
//不同变量指向同一对象，那么他们都是这个对象的引用，
//也就说他们指向同一内存地址，改变一个会影响其他对象
var o1 = {};
var o2 = o1;

o2.p = 1;
o1.p // 1
//但是这种引用只限于  对象
//对于原始类型的数据  是传值引用 也就是值拷贝
var x = 2;
var y = x;
x = 1;
y // 2
