var o = new Object();
var b = {};

//在Object对象上部署方法，有两种做法
//部署在Object对象本身
Object.print = function(o) {console.log(o);}
//部署在Object.prototype对象
//所有构造函数都有一个prototype属性，指向一个原型对象
//凡是定义在Object.prototype对象上得属性和方法，将被所有实例对象共享
Object.prototype.print = function(){console.log(this);}

//Object.keys()   Object.getOwnPropertyNames()
//都返回 对象参数 属性名数组，但是前者不返回不可枚举的，后者返回不可枚举的
var o = {
	p1: '123',
	p2: 123
};
Object.keys(o) //['p1', 'p2']
Object.getOwnPropertyNames(o) //['p1', 'p2']

//Object实例对象方法
//valueOf()  toString()

//属性的attributes对象
//每个属性都有一个attributes对象
value //该属性的值,默认undefined
writable //该属性是否可变,默认true
enumerable //是否可枚举，默认为true
configurable //是否可配置,默认为true
get //
set //

//Object.defineProperty() Object.defineProperties()
//格式如下Object.defineProperty(object, propertyName, attributesObject),返回重置的对象
var o = Object.defineProperty({}, 'p', {
	value: 123,
	writable: false,
	enumerable: true,
	configurable: false
});

o.p // 123
o.p = 234 //error,因为writable为false

//一次修改多个属性
var o = Object.defineProperties({}, {
	p1: {value: 123, writable: true},
	p2: {value: 234, enumerable: true}
})
