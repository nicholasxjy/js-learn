NaN === NaN//false
Boolean(NaN)//false
0 / 0 //NaN
//可以用isNaN()判断
1 / -0 //-Infinity
1 / +0 //+Infinity
Infinity - Infinity //NaN
Infinity / Infinity //NaN
//可以用isFinite()判断

parseInt('8a') = 8
//如果第一个不能转换为数值，则会返回NaN
parseInt('abc') //NaN
parseInt(.3) //NaN
//第二个参数表示进制，2-36之间
parseInt(1000, 2) //8
parseInt("1011", 2) //11
//如果第一个参数是数值，则现将其转换为10进制，在进行后面的转换
parseInt(010, 10) //8
parseInt(010, 8) //由于8进制没 数字8，所以会NaN

//Base64是一种将二进制数据转化为可打印字符的编码方法
window.atob("Hello World") //"SGVsbG8gV29ybGQ="
window.btoa("SGVsbG8gV29ybGQ=") //"Hello World"
//以上方法不支持ASCII字符转换为Base64
window.atob("你好")//InvalidCharacterError: An invalid or illegal character was specified, such as in an XML name.

//解决办法，在中间加入转码
function b64Encode(str) {
	return window.atob(unescape(encodeURIComponent(str)));
}

function b64Decode(str) {
	return decodeURIComponent(escape(window.atob(str)))
}
