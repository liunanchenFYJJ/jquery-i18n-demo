// 自执行函数(私有命名空间,不会污染全局)
// 引入window: 将window变成局部变量，使用时不必将作用域链回退到顶级作用域
//     undefined: 确保undefined为undefined?
(function(window, undefined) {
    // 定义cQuery
    let cQuery = function() {
        console.log('cQuery');
    };
    // 版本号
    let version = '0.0.1';
    // 为什么要这么写?
    cQuery.fn = cQuery.prototype = {
        cquery: version,
        constructor: cQuery,
        length: 0,
        add: function() {

        },
        plus: function() {

        }
    };
    // 暴露cQuery
    window.$ = window.cQuery = cQuery; 
})(window)