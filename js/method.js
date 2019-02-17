~function (pro) {
    pro.formatTime=function (tem) {
        tem=tem||"{0}年{1}月{2}日 {3}时{4}分{5}秒";
        var ary=this.match(/\d+/g);
        tem=tem.replace(/\{(\d+)\}/g,function () {
            var n=arguments[1],
                val=ary[n]||"0";
            val<10?val="0"+val:null;
            return val;
        })
        return tem;
    }
}(String.prototype)