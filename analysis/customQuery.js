// 自执行函数(私有命名空间,不会污染全局)
// 引入window: 将window变成局部变量，使用时不必将作用域链回退到顶级作用域
//     undefined: 确保undefined为undefined?
(function(window, undefined) {
    // 定义cQuery对象
    /**
     * 
     * @param {String} selector 
     * @returns {Object} cQuery
     */
    let cQuery = function( selector ) {
        return new cQuery.fn.init( selector );
    };
    // 版本号
    let version = '0.0.1';
    // cQuery对象原型 
    // 为什么要这么写:
    // 所有挂载到cQuery.fn的方法，相当于挂载到cQuery.prototype,即cQuery函数上
    cQuery.fn = cQuery.prototype = {
        cquery: version,
        constructor: cQuery,
        length: 0,
        init: function( selector ) {

        }
    };
    // 
    cQuery.fn.init.prototype = cQuery.fn;
    // 暴露cQuery
    window.$ = window.cQuery = cQuery; 
})(window)