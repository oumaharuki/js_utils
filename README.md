# ### utils

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

   4.css

   getCss or setCss or setGroupCss

   获取css和设置css的总方法参数对应上文,可以是两个也可以是三个

   ```javascript
   utils.css(Odiv,{
       "width":500,
       "background":"red"
   });
   ```
