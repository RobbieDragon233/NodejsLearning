#前言
JavaScript 是 web 开发者必学的三种语言之一：
<li>HTML 定义网页的内容</li>
<li>CSS 规定网页的布局</li>
<li>JavaScript 对网页行为进行编程</li>

#Head部分
>在本节中，了解Head包括
>

##Js
>在本节中，了解Js几种存放的位置，Js的基本语法，以及Js常见操作，包括脚本对Html元素的修改，鼠标键盘事件等

Js的引用：1.内部脚本 2.外部脚本 3.外部引用
```<script>``` 标签
在 HTML 中，JavaScript 代码必须位于 ```<script>``` 与 ```</script>``` 标签之间。

<h3>内部脚本</h3>
 把JavaScript放置在`<head>` 或 `<body>` 中。

```
<script>
function myFunction() {}
</script>
```

提示：把脚本置于 <body> 元素的底部，可改善显示速度，因为脚本编译会拖慢显示。
###外部脚本
外部文件：*myScript.js*
如需使用外部脚本，请在` <script>` 标签的 src (source) 属性中设置脚本的名称：
```
<script src="myScript.js"></script>
```
在外部文件中放置脚本有如下优势：

分离了 HTML 和代码
使 HTML 和 JavaScript 更易于阅读和维护
已缓存的 JavaScript 文件可加速页面加载
###外部引用
可通过完整的 URL 或相对于当前网页的路径引用外部脚本：
```
<script src="https://www.w3school.com.cn/js/myScript1.js"></script>
```
##JavaScript函数
JavaScript 不提供任何内建的打印或显示函数。
JavaScript 能够以不同方式“显示”数据：
* 使用 window.alert() 写入警告框
* 使用 document.write() 写入 HTML 输出
* 使用 innerHTML 写入 HTML 元素
* 使用 console.log() 写入浏览器控制台

1. 弹出一个警告框 
```
<script>
window.alert(5 + 6);
</script>
```
2. 出于测试目的，使用 document.write() 比较方便（也是显示在网页）
3. 如需访问 HTML 元素，使用 ```document.getElementById(id)``` 方法。
id 属性定义 HTML 元素。
```
<script>
 document.getElementById("demo").innerHTML = 5 + 6;
</script>
```
提示：更改 HTML 元素的 innerHTML 属性是在 HTML 中显示数据的常用方法。
4. 使用 ```console.log()``` 方法来显示数据。
```
<script>
console.log(5 + 6);
</script>
```

##JS语法(不重要)
如果 JavaScript 语句太长，对其进行折行的最佳位置是某个运算符
JavaScript 语句可以用花括号（{...}）组合在代码块中。代码块的作用是定义一同执行的语句。

|关键词|	描述|
|---|---|
|break|	终止 switch 或循环。|
|continue|	跳出循环并在顶端开始。|
|debugger|	停止执行 JavaScript，并调用调试函数（如果可用）。|
|do ... while|	执行语句块，并在条件为真时重复代码块。|
|for|	标记需被执行的语句块，只要条件为真。|
|function|	声明函数。|
|if ... else|	标记需被执行的语句块，根据某个条件。|
|return|	退出函数。|
|switch|	标记需被执行的语句块，根据不同的情况。|
|try ... catch|	对语句块实现错误处理。|
|var|	声明变量。|

##JavaScript 值
混合值和变量值。
混合值被称为字面量（literal）(相当于一个常量):写数值有无小数点均可;字符串是文本，由双引号或单引号包围。
变量用于存储数据值。
使用 var 关键词来声明变量，= 号用于为变量赋值。

JavaScript 程序员倾向于使用以小写字母开头的驼峰大小写。

var变量能够保存多种数据类型：数值、字符串值、数组、对象等等，且var是动态类型
数值和字符串相加时，JavaScript 将把数值视作字符串。
```
var cars = ["Porsche", "Volvo", "BMW"];
```
JavaScript 对象用花括号来书写，对象属性是 name:value 对，由逗号分隔。
```
var person = {
  firstName: "Bill",
  lastName : "Gates",
  id       : 678,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```
上例中的对象（person）有四个属性：firstName、lastName、age 以及 eyeColor。
对象访问属性```objectName.propertyName```

typeof 运算符返回变量或表达式的类型：
```
typeof "Bill"              // 返回 "string"
typeof (7 + 8)             // 返回 "number"
```

任何变量均可通过设置值为 undefined 进行清空，其类型也将是 undefined；可以通过设置值为 null 清空对象.
空值与 undefined 不是一回事。
```
person = undefined;          // 值是 undefined，类型是 undefined
var car = "";                // 值是 ""，类型是 "string"
var person = null;           // 值是 null，但是类型仍然是对象
```


###<font color='red'>typeof 运算符值</font>
可返回以下原始类型之一：string、number、boolean、undefined

对于复杂数据，typeof 运算符可返回以下两种类型之一：function、object
```typeof``` 运算符把对象、数组或 ```null``` 返回 ```object```。


您能够以两种方式访问属性：```objectName.propertyName```或者```objectName["propertyName"]```

如果通过关键词 "new" 来声明 JavaScript 变量，则该变量会被创建为对象：
```
var x = new String();        // 把 x 声明为 String 对象
var y = new Number();        // 把 y 声明为 Number 对象
var z = new Boolean();       //	把 z 声明为 Boolean 对象
```
请避免字符串、数值或逻辑对象。他们会增加代码的复杂性并降低执行速度。

###<font color='red'>HTML 事件</font>
HTML 事件可以是浏览器或用户做的某些事情。比如：HTML 网页完成加载，HTML 输入字段被修改、HTML 按钮被点击。
通常，当事件发生时，用户会希望做某件事。TML 允许您向 HTML 元素添加事件处理程序，```<element event='一些 JavaScript'>```

```
<button onclick='document.getElementById("demo").innerHTML=Date()'>现在的时间是？</button>
```
|事件|	描述|
|---|---|
|onchange|	HTML 元素已被改变|
|onclick|	用户点击了 HTML 元素|
|onmouseover|	用户把鼠标移动到 HTML 元素上|
|onmouseout|	用户把鼠标移开 HTML 元素|
|onkeydown|	用户按下键盘按键|
|onload|	浏览器已经完成页面加载|

##JS字符串
转义字符（\）
1. 字符串长度：`leng
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. ` 属性返回字符串的长度。
```
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
```
2. 查找字符串中的字符串:`indexOf() `方法返回字符串中指定文本首次出现的索引（位置）。
```
var str = "The full name of China is the People's Republic of China.";
var pos = str.indexOf("China"); //17
```
`lastIndexOf()` 方法返回指定文本在字符串中最后一次出现的索引：
```
var str = "The full name of China is the People's Republic of China.";
var pos = str.lastIndexOf("China"); //51
```
未找到文本均返回-1。
两种方法都接受作为检索起始位置的第二个参数。即```var pos = str.indexOf("China", 18);```

3. 检索字符串中的字符串:`search()` 方法搜索特定值的字符串，并返回匹配的位置.
```
var str = "The full name of China is the People's Republic of China.";
var pos = str.search("locate");
```
`indexOf()` 与 `search()`，是结果相等的。但是两者区别在于：
	`search()` 方法无法设置第二个开始位置参数。
	`indexOf()` 方法无法设置更强大的搜索值（正则表达式）。

4. 提取部分字符串
4.1 slice(start, end)  提取字符串的某个部分并在新字符串中返回被提取的部分。该方法设置两个参数：起始索引（开始位置），终止索引（结束位置）。```var res = str.slice(7,13);```
4.2 substring(start, end) 类似slice，但是不支持负索引。
4.3 substr(start, length) 类似slice，不同之处在于第二个参数规定被提取部分的长度；如果省略第二个参数，表示字符串剩余部分。

5. 替换字符串内容
replace() 方法用另一个值替换在字符串中指定的值,返回的是新字符串：
```
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3School");
```
默认地，replace() 只替换首个匹配
如需执行大小写不敏感的替换，请使用正则表达式 /i（大小写不敏感）```var n = str.replace(/MICROSOFT/i, "W3School");```;
如需替换所有匹配，请使用正则表达式的 g 标志（用于全局搜索）```var n = str.replace(/Microsoft/g, "W3School");```

6. 转换为大写和小写
```toUpperCase() ```把字符串转换为大写;```toLowerCase()``` 把字符串转换为小写

7. 提取字符串字符
`charAt(position)` 返回字符串中指定下标（位置）的字符串
`charCodeAt(position)` 返回字符串中指定索引的字符 unicode 编码。

8. 常用方法
8.1 连接字符串 ```concat() ```连接两个或多个字符串;`concat()` 方法可用于代替加运算符。下面两行是等效的：
```
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ","World!");
```
8.2 删除字符串两端的空白符：```trim()```
```
var str = "       Hello World!        ";
alert(str.trim());
```
8.3 可搭配正则表达式使用 replace() 方法代替：
```
var str = "       Hello World!        ";
alert(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
```
8.4 `split()`分割
```
var txt = "a,b,c,d,e";   // 字符串
txt.split(",");          // 用逗号分隔
```

##JS数值
==要求数值相等；===要求类型和数值相等(尽量不要用===)
1. ``toString()`` 以字符串返回数值。
```
var x=32
x.toString();            // 32
x.toString(10); //10进制 32
x.toString(8); //8进制 40
```
2. `toExponential()` 返回字符串值，它包含已被四舍五入并使用指数计数法的数字。
该参数是可选的。如果您没有设置它，JavaScript 不会对数字进行舍入。
```
var x = 9.656;
x.toExponential(2);     // 返回 9.66e+0
x.toExponential(4);     // 返回 9.6560e+0
x.toExponential(6);     // 返回 9.656000e+0
```
3. toFixed() 返回字符串值，它包含了指定位数小数的数字.
toFixed(2) 非常适合处理金钱。
```
var x = 9.656;
x.toFixed(0);           // 返回 10
x.toFixed(2);           // 返回 9.66
x.toFixed(4);           // 返回 9.6560
x.toFixed(6);           // 返回 9.656000
```
4. toPrecision() 返回字符串值，它包含了指定长度的数字：
```
var x = 9.656;
x.toPrecision();        // 返回 9.656
x.toPrecision(2);       // 返回 9.7
```
5. <font color='red'> valueOf() 以数值返回数值：</font>
```
var x = 123;
x.valueOf();            // 从变量 x 返回 123
(123).valueOf();        // 从文本 123 返回 123
```
6. <font color='red'>把变量转换为数值</font>
|方法|	描述|
|---|---|
|Number()|	返回数字，由其参数转换而来。|
|parseFloat()|	解析其参数并返回浮点数。|
|parseInt()|	解析其参数并返回整数。|
```
x = true;
Number(x);        // 返回 1
//Number() 还可以把日期转换为数字：
Number(new Date("2019-04-15"));    // 返回 1506729600000
//上面的 Number() 方法返回 1970 年 1 月 1 日至今的毫秒数。(时间戳）
```
```
//允许空格。只返回首个数字
parseInt("10");         // 返回 10
parseInt("10.33");      // 返回 10
parseInt("10 20 30");   // 返回 10
parseInt("years 10");   // 返回 NaN
//如果无法转换为数值，则返回 NaN (Not a Number)。
```
```
//允许空格。只返回首个数字
parseFloat("10");        // 返回 10
parseFloat("10.33");     // 返回 10.33
parseFloat("10 20 30");  // 返回 10
```
|属性|	描述|
|---|---|
|MAX_VALUE|	返回 JavaScript 中可能的最大数。|
|MIN_VALUE|	返回 JavaScript 中可能的最小数。|
|NEGATIVE_INFINITY|	表示负的无穷大（溢出返回）。|
|NaN|	表示非数字值（"Not-a-Number"）。|
|POSITIVE_INFINITY|	表示无穷大（溢出返回）。|
```var x = Number.MAX_VALUE;```

##js数组
向数组添加新元素的最佳方法是使用 `push()` 方法，也可以使用 length 属性向数组添加新元素：
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");    
fruits[fruits.length] = "Lemon"; 
fruits[6] = "Lemon";     //未定义部分为：undefined
```
###数组和对象的区别
在 JavaScript 中，数组使用数字索引；在 JavaScript 中，对象使用命名索引。
```
person["firstName"] = "Bill";
person[2] = 62;
```
识别数组：
```
Array.isArray(fruits);     // 返回 true
//可能需要自己创建
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}
```
1. toString() 把**数组**转换为数组值（逗号分隔）的字符串;join() 方法也可将所有数组元素结合为一个字符串,可以规定分隔符.
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString(); 
//Banana,Orange,Apple,Mango
document.getElementById("demo").innerHTML = fruits.join(" * "); 
//Banana * Orange * Apple * Mango
```
2. Popping Pushing。shift() 方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引，返回被“位移出”的字符串。unshift() 方法（在开头）向数组添加新元素，并“反向位移”旧元素，返回新数组的长度。

3. 通过使用它们的索引号来访问和修改数组元素，delete 运算符来删除
```
delete fruits[0];           // 把 fruits 中的首个元素改为 undefined
```
使用 delete 会在数组留下未定义的空洞。请使用 pop() 或 shift() 取而代之。

4. <font color='red'>拼接数组</font>
```splice(2,0,“Lemon”，“Kiwi”)```第一个参数（2）定义了应添加新元素的位置（拼接）,第二个参数（0）定义应删除多少元素,其余参数（“Lemon”，“Kiwi”）定义要添加的新元素。返回一个**包含已删除项的数组**.

5. 合并（连接）数组
concat() 方法通过合并（连接）现有数组来创建一个新数组,不会更改现有数组。它总是返回一个**新数组**,可以使用任意数量的数组参数.
```
var myChildren = arr1.concat(arr2, arr3);   // 将arr1、arr2 与 arr3 连接在一起
```

6 裁剪数组
slice() 方法用数组的某个片段切出新数组,**返回新数组**。它不会从源数组中删除任何元素
```
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);  //Apple,Mango
```
```Math.max.apply ```来查找数组中的最高值
```
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
```
有数值的对象：```cars.sort(function(a, b){return a.year - b.year});```，字符串属性属性：
```
cars.sort(function(a, b){
	  var x = a.type.toLowerCase();
	  var y = b.type.toLowerCase();
	  if (x < y) {return -1;}
	  if (x > y) {return 1;}
	  return 0;
});
```

#数组迭代

* <font color='red'>Array.forEach()</font>为每个数组元素调用一次函数（回调函数）。<font color='red'>修改原数组。</font>
该函数接受 3 个参数：项目值、项目索引、数组本身。

```
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>"; 
}
//只用了 value 参数。这个例子可以重新写为
function myFunction(value) {
  txt = txt + value + "<br>"; 
}
```
* <font color='red'>Array.map()</font>方法通过对每个数组元素执行函数来创建新数组,不会对没有值的数组元素执行函数,不会更改原始数组。<font color='red'>返回新数组。</font>

```
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
```
* <font color='red'>Array.filter()</font>方法创建一个包含通过测试的数组元素的新数组。<font color='red'>过滤数组。</font>

```
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```
* <font color='red'>Array.reduce()</font>方法在每个数组元素上运行函数，以生成（减少它）单个值,在数组中从左到右工作。另请参见 reduceRight（）。不会减少原始数组。<font color='red'>累加器。</font>

```
//total 总数（初始值/先前返回的值）
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
```
reduce() 方法能够接受一个初始值，相当于加一个初始值而已。```var sum = numbers1.reduce(myFunction, 100);```

* Array.every()方法检查所有数组值是否通过测试，返回布尔值。
```
function myFunction(value, index, array) {
  return value > 18;
}
```
Array.some()方法检查某些数组值是否通过了测试。也是三个参数：项目值、项目索引、数组本身

* Array.indexOf()方法在数组中搜索元素值并返回其位置。```array.indexOf(item, start)```
Array.lastIndexOf() 与 Array.indexOf() 类似，但是从数组结尾开始搜索。

* Array.find()方法返回通过测试函数的第一个数组元素的值。

```
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```
`Array.findIndex()`方法返回通过测试函数的第一个数组元素的索引。

##JavaScript 日期
默认情况下，JavaScript 将使用浏览器的时区并将日期显示为全文本字符串：```Tue Apr 02 2019 09:01:19 GMT+0800 (中国标准时间)```
Date 对象由新的 Date() 构造函数创建。
```new Date()``` ```new Date(year, month, day, hours, minutes, seconds, milliseconds)``` ```new Date(milliseconds)``` ```new Date(date string)```
注释：JavaScript 从 0 到 11 计算月份。一月是 0。十二月是11。一位和两位数年份将被解释为 19xx 年：
```new Date(date string)```形如```var d = new Date("October 13, 2014 11:13:00");```
```toDateString() ```方法将日期转换为更易读的格式：
```
var d = new Date();
document.getElementById("demo").innerHTML = d.toDateString(); //Sat Jul 04 2020
```
```toUTCString()``` 方法将日期转换为 UTC 字符串（一种日期显示标准）。
```
var d = new Date();
document.getElementById("demo").innerHTML = d.toUTCString();//Sat, 04 Jul 2020 09:55:10 GMT
```
```date string```有很多写法，基本上都能一眼看懂。

日期获取方法

|方法|	描述|
|---|---|
|getDate()|	以数值返回天（1-31）|
|getDay()|	以数值获取周名（0-6）|
|getFullYear()|	获取四位的年（yyyy）|
|getHours()|	获取小时（0-23）|
|getMilliseconds()|	获取毫秒（0-999）|
|getMinutes()|	获取分（0-59）|
|getMonth()|	获取月（0-11）|
|getSeconds()|	获取秒（0-59）|
|getTime()|	获取时间（从 1970 年 1 月 1 日至今）|

日期设置方法

|方法|	描述|
|---|---|
|setDate()|	以数值（1-31）设置日|
|setFullYear()|	设置年（可选月和日）|
|setHours()|	设置小时（0-23）|
|setMilliseconds()|	设置毫秒（0-999）|
|setMinutes()|	设置分（0-59）|
|setMonth()|	设置月（0-11）|
|setSeconds()|	设置秒（0-59）|
|setTime()|	设置时间（从 1970 年 1 月 1 日至今的毫秒数）|

##Math
1
```
Math.PI;            // 返回 3.141592653589793
Math.round(x); 	//返回值是 x 四舍五入为最接近的整数：
Math.pow(x, y);	//返回值是 x 的 y 次幂：
Math.sqrt(x);	// 返回 x 的平方根：
Math.abs(x);	// 返回 x 的绝对（正）值：
Math.ceil(x);	//返回值是 x 上舍入最接近的整数：
Math.floor(x);	//返回值是 x 下舍入最接近的整数：
Math.sin(x);	// 返回角 x（以弧度计）的正弦（介于 -1 与 1 之间的值）。
Math.cos(x);	//返回角 x（以弧度计）的余弦（介于 -1 与 1 之间的值）。
Math.min(); Math.max();	//可用于查找参数列表中的最低或最高值：
Math.random();	// 返回介于 0（包括） 与 1（不包括） 之间的随机数：
```

<font color='red'>**JavaScript 中有五种可包含值的数据类型：**</font>
字符串（string）
数字（number）
布尔（boolean）
对象（object）
函数（function）

<font color='red'>**有三种对象类型：**</font>
对象（Object）
日期（Date）
数组（Array）

同时有两种不能包含值的数据类型：
null
undefined

请注意：
NaN 的数据类型是数值
数组的数据类型是对象
日期的数据类型是对象
null 的数据类型是对象
未定义变量的数据类型是 undefined
尚未赋值的变量的数据类型也是 undefined
您无法使用 typeof 去判断 JavaScript 对象是否是数组（或日期）。

##正则表达式
语法```/pattern/modifiers;```
实例```var patt = /w3school/i;```w3school 是模式（pattern）（在搜索中使用）; i 是修饰符（把搜索修改为大小写不敏感）。

|修饰符|	描述|
|---|---|
|i|	执行对大小写不敏感的匹配。|
|g|	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。|
|m|	执行多行匹配。|

括号用于查找一定范围的字符串

|表达式|	描述|
|---|---|
|[abc]|	查找方括号之间的任何字符。|
|[0-9]|	查找任何从 0 至 9 的数字。|
|(x|y)|	查找由 | 分隔的任何选项。|

元字符（Metacharacter）是拥有特殊含义的字符：

|元字符|	描述|
|---|---|
|\d|	查找数字。|
|\s|	查找空白字符。|
|\b|	匹配单词边界。|
|\uxxxx|	查找以十六进制数 xxxx 规定的 Unicode 字符。|

Quantifiers 定义量词：

|量词|	描述|
|---|---|
|n+|	匹配任何包含至少一个 n 的字符串。|
|n*|	匹配任何包含零个或多个 n 的字符串。|
|n?|	匹配任何包含零个或一个 n 的字符串。|

当发生错误时，JavaScript 通常会停止并产生错误消息。
技术术语是这样描述的：JavaScript 将抛出异常（抛出错误）。
JavaScript 实际上会创建带有两个属性的 Error 对象：name 和 message。

|属性|	描述|
|---|---|
|name|	设置或返回错误名|
|message|	设置或返回错误消息（一条字符串）|

throw 语句允许您创建自定义错误。
从技术上讲您能够抛出异常（抛出错误）。
异常可以是 JavaScript 字符串、数字、布尔或对象：
```
throw "Too big";    // 抛出文本
throw 500;          //抛出数字
```

#DOM
当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。
查找 HTML 元素

|方法|	描述|返回|
|---|---|---|
|document.getElementById(id)|	通过元素 id 来查找元素|如果元素被找到，此方法会以对象返回该元素|
|document.getElementsByTagName(name)|	通过标签名来查找元素|返回的是一个数组|
|document.getElementsByClassName(name)|	通过类名来查找元素|返回的是一个数组|

改变 HTML 元素

|方法|	描述|
|---|---|
|element.innerHTML = new html content|	改变元素的 inner HTML|
|element.attribute = new value|	改变 HTML 元素的属性值|
|element.setAttribute(attribute, value)|	改变 HTML 元素的属性值|
|element.style.property = new style|	改变 HTML 元素的样式|
```document.getElementById("p2").style.color = "blue";```

改变HTML属性
```document.getElementById(id).attribute = new value```
```
<img id="myImage" src="smiley.gif">

<script>
document.getElementById("myImage").src = "landscape.jpg";
</script>

```

添加和删除元素

|方法|	描述|
|---|---|
|document.createElement(element)|	创建 HTML 元素|
|document.removeChild(element)|	删除 HTML 元素|
|document.appendChild(element)|	添加 HTML 元素|
|document.replaceChild(element)|	替换 HTML 元素|
|document.write(text)|	写入 HTML 输出流|

添加事件处理程序

|方法|	描述|
|---|---|
|document.getElementById(id).onclick = function(){code}|	向 onclick 事件添加事件处理程序|





# 二次学习

1.JavaScript 也还包括其他两种重要的 for 循环： [`for`...`of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)和 [`for`...`in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

**`for...in`语句**以任意顺序遍历一个对象的除[Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)以外的[可枚举](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)属性。

`for ... in`是为遍历对象属性而构建的，返回的是键，用`obj[prop]`来访问值，不建议与数组一起使用，数组可以用`Array.prototype.forEach()`和`for ... of`

很多非键值都可以用of尝试，键值也可以`for [key, value] of obj`



2.创建一个空对象更方便的方法叫作“对象字面量（object literal）”法。这种也是 JSON 格式的核心语法。`var obj={};`

属性可以通过链式（chain）表示方法进行访问：

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

3.JavaScript 中的数组是一种特殊的对象。它的工作原理与普通对象类似（以数字为属性名，但只能通过`[]` 来访问），但数组还有一个特殊的属性——`length`（长度）属性。这个属性的值通常比数组最大索引大 1。

ECMAScript 5 增加了另一个遍历数组的方法，`forEach()`：

4.闭包