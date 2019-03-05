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
    let cQuery = function( selector, context ) {
        // return new cQuery.prototype.init( selector );
        return new cQuery.fn.init( selector, context );
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
        /**
         * 对传入selector进行分析 7种？
         * context上下文限制selector的搜索范围
         * 结合jQuery API文档
         * @param {*} selector
         * @param {Element} context
         * 1.DOM元素 包装成cQuery对象，直接返回
         * 2.body document.body
         * 3.HTML标签 document.createElement
         * 4.HTML字符串 document.createDocumentFragment
         * 5.#id
         * 6.选择器表达式
         * 7.函数
         */
        init: function( selector, context ) {
            let match;
            // 处理selector falsy时
            // $('') $(null) $(undefined) $(false)
            if ( !selector ) {
                return this;
            }
            // 处理selector string时
            if (typeof selector === 'string') {
                let idReg = /^#/;
                let classReg = /^./;
                // let tagReg = /^<$>/;
                // 简单情况，(没有转义字符的情况下)
                // $('#id')
                if (idReg.test(selector)) {
                    match = document.getElementById(selector.slice(1));
                }
                // $('.class')
                if (classReg.test(selector)) {
                    match = document.getElementsByClassName(selector.slice(1));
                }
                // $('div')
                // if (tagReg.test(selector)) {
                    match = document.getElementsByTagName(selector);
                // }
            }
            return match;
        }
    };
    // 对应第13行?
    // cQuery.fn.init的原型 ==指向==> cQuery.fn 即$实例继承cQuery.fn 所有方法
    cQuery.fn.init.prototype = cQuery.fn;
    // 合并两个或者更多对象的属性到第一个对象中 结合api?
    /**
     * 
     */
    cQuery.extend = cQuery.fn.extend = function() {};
    cQuery.extend({

    })
    // 暴露cQuery
    window.$ = window.cQuery = cQuery; 
})(window)