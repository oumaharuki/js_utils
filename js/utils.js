var utils=(function () {
    //get ele css
    var getCss=function (ele, attr) {
        var val = null;
        val='getComputedStyle' in window?window.getComputedStyle(ele,null)[attr]:ele.currentStyle[attr];
        var reg = /^-?\d+(\.\d+)?(px|pt|em|rem)?$/i;
        reg.test(val) ? val = parseFloat(val) : null;
        return val;
    }
    //set ele css
    var setCss = function (ele, attr, value) {
        !isNaN(value) && !/^(zIndex|opacity)$/i.test(attr) ? value += 'px' : null;
        ele['style'][attr] = value;
    };
    //set ele group css
    var setGroupCss = function (ele, options) {
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                setCss(ele, key, options[key]);
            }
        }
    };
    //set or get ele css
    var css = function () {
        var len = arguments.length,
            fn = getCss;
        var arg=[].slice.call(arguments);
        len >= 3 ? fn = setCss : null;
        len === 2 && (typeof arg[1] === 'object') ? fn = setGroupCss : null;
        return fn.apply(null,arg);
    };
    //get ele from ele to offset
    var offset = function (ele) {
        var p = ele.offsetParent,
            curL = ele.offsetLeft,
            curT = ele.offsetTop;
        while (p && p.tagName !== 'BODY') {
            curL += p.clientLeft + p.offsetLeft;
            curT += p.clientTop + p.offsetTop;
            p = p.offsetParent;
        }
        return {top: curT, left: curL};
    };
    return {
        getCss:getCss,
        setCss:setCss,
        setGroupCss:setGroupCss,
        css:css,
        offset:offset
    }
})();