var a = []
var b = a
b[0] = 1
a[0] //值为1
a === b //true
//将对象或数组赋值给变量，只是赋值 引用值，对象本身没有复制一次
//如果想得到对象或数组的一个副本，需要通过循环显示复制每个元素
var a = ['a', 'b', 'c'];
var b = []
for(var i = 0; i < a.length; i++) {
	b[i] = a[i];
}

类型转换
parseInt('3 meters') = 3
parseInt('33', 3) = 3 * 3 + 3 = 12
parseInt('077', 2) = 7 * 2 + 7 = 21
parseInt('ff', 2) = 15 * 2 + 15 = 45
parseFloat(.1) = 0.1