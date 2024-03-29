
// 实现new方法
/**
* new 的过程
* 1. 创建一个空对象
* 2. 将function的this指向空对象
* 3. 执行function的代码
* 4. 返回对象
*/ 

// 特殊点：对于function有return值为基本类型或无return，new的返回值为 实例的Object
// return为object，new的返回值为function return的值

function similarNew () {
    var obj = {}
    var fn = [].shift.apply(arguments)
    obj.__proto__ = fn.prototype
    var ret = fn.apply(obj, arguments)
    return typeof ret === 'object' ? ret : obj
}

function a (name) {
    this.name = name
}

a.prototype.getA = function () {
    return this.name
} 

var b = simliarNew(a, 'ss')