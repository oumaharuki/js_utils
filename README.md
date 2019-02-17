### utils

前端开发中用到的一些方法，封装好以后只要导入就可以很快速使用。兼容到ie678.

### 使用

```javascript
<script src="js/utils.js"></script>
```

### 方法

1. getCss

```javascript
getCss(ele, attr)
```

ele:需要获取的元素节点

attr：需要获取的属性

```javascript
var height=utils.getCss(Odiv,"height");
```

2. setCss

```
setCss(ele, attr, value)
```

ele:需要设置的元素节点

attr：需要设置的属性

value：需要设置的值

```javascript
utils.css(Odiv,"background","blue");
```

3. setGroupCss

```
setGroupCss(ele, options)
```

ele:需要设置的元素节点

options：一个属性和值的obj

```javascript
utils.setGroupCss(Odiv,{
	"width":500,
	"background":"red"
});
```

4. css

getCss or setCss or setGroupCss

获取css和设置css的总方法参数对应上文,可以是两个也可以是三个

```javascript
utils.css(Odiv,{
	"width":500,
	"background":"red"
});
```

5. offset

获取元素到body的偏移,得到的是一个obj：{top: 0, left: 0}

```
var offset=utils.offset(Odiv);
```

## string method
1.formatTime
模板：{0}年{1}月{2}日 {3}时{4}分{5}秒
将时间格式化
```javascript
var str="2018/2/16 21:40:5";
str.formatTime();//"2018年02月16日 21时40分05秒"
//自定义模板
str.formatTime("{1}/{2} {3}:{4}");//"02/16 21:40"
```

