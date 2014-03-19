//DOM
//DOM最小单位 是节点 node
//对于html文档，有以下节点
文档节点 代表整个文档 window.document
元素节点 代表html元素 <body> <a>
属性节点 代表html元素属性 class='right'
文本节点 代表html文档中的文本
文档碎片节点
文档类型节点 <!DOCTYPE html>

//浏览器原生提供一个node对象，以上都继承了node属性和方法
firstChild
lastChild
nextSibling
parentNode
previousSibling
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling

//页面位置的相关属性
offsetParent:当前html元素的最靠近的，并且css position属性不等于static的父元素
offsetTop: 当前html元素左上角相对于offsetParent的垂直位移
offsetLeft: 当前html元素左上角相对于offsetParent的水平位移

