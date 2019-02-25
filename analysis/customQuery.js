// 自执行函数(私有命名空间,不会污染全局)
// 引入window: 将window变成局部变量，使用时不必将作用域链回退到顶级作用域
//     undefined: 确保undefined为undefined?
(function(window, undefined) {
    // 定义cQuery对象
    /**
     * 构造函数cQuery
     * 原型模式
     * @param {String} selector 
     * @returns {cQuery} cQuery实例
     */
    let cQuery = function( selector ) {
        // return new cQuery.prototype.init( selector );
        return new cQuery.fn.init( selector );
    };
    // 版本号
    let version = '0.0.1';
    // cQuery对象原型 
    // 为什么要这么写: cQuery.fn的作用,扩展?
    // 所有挂载到cQuery.fn的方法,都相当于挂载到cQuery原型
    cQuery.fn = cQuery.prototype = {
        // construcotor默认指向Object,改变其指向:原构造函数
        constructor: cQuery,
        cquery: version,
        length: 0,
        init: function( selector ) {
            console.log('selector');
        }
    };
    // 对应第13行?
    // cQuery.fn.init的原型 ==指向==> cQuery.fn 即$实例继承cQuery.fn 所有方法
    cQuery.fn.init.prototype = cQuery.fn;
    // 暴露cQuery
    window.$ = window.cQuery = cQuery; 
})(window)