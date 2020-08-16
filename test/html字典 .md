#1.HTML 元素语法
HTML 元素以开始标签起始
HTML 元素以结束标签终止
元素的内容是开始标签与结束标签之间的内容
某些 HTML 元素具有空内容（empty content）
空元素在开始标签中进行关闭（以开始标签的结束而结束）
大多数 HTML 元素可拥有属性
HTML 标签对大小写不敏感：`<P>` 等同于 `<p>`。

#2.基础
##2.1元素
`<html>` 与 `</html>` 之间的文本描述网页
`<body>` 与 `</body>` 之间的文本是可见的页面内容
`<h1>` 与 `</h1>` 之间的文本被显示为标题(1-6)
`<p>` 与 `</p>` 之间的文本被显示为段落
`<img>`图像标签。
`<br>` 就是没有关闭标签的空元素【空元素即不能成对出现的，可以理解为不需要`</br>`对其进行关闭】（`<br>` 标签定义换行）。`<br>`换行前后无空白
在 XHTML、XML 以及未来版本的 HTML 中，所有元素都必须被关闭。
即使 `<br>` 在所有浏览器中都是有效的，但使用 `<br />` 其实是更长远的保障。
`<hr />` 标签在 HTML 页面中创建水平线。（就在上文下面加一根水平的直线）
HTML 注释`<!-- This is a comment -->`。注释：开始括号之后（左边的括号）需要紧跟一个叹号，结束括号之前（右边的括号）不需要。

## 标签和属性
HTML 标签可以拥有属性。属性提供了有关 HTML 元素的更多的信息。
HTML 链接由 `<a> `标签定义。链接的地址在 href 属性中指定
属性值应该始终被包括在引号内。双引号是最常用的，不过使用单引号也没有问题。

class属性可以不止一个，他们是并列的。

|  属性   | 值  | 描述  |
|  ----  | ----  | ----  |
| class  | classname | 规定元素的类名（classname） |
| id  | id | 规定元素的唯一 id |
| style(标签)  | style_definition | 规定元素的行内样式（inline style） |
| title  | text | 规定元素的额外信息（可在工具提示中显示） |

[标签](https://www.w3school.com.cn/tags/index.asp)
 [属性](https://www.w3school.com.cn/tags/html_ref_standardattributes.asp)



## 文本、图片
文本格式化标签：

| 标签 | 描述 |
| --- |--- |
|`<b>` | 定义粗体文本|
|`<big>` | 定义大号字|
|`<em>` | 定义着重文字|
|`<i>` | 定义斜体字|
|`<small>` | 定义小号字|
|`<strong>` | 定义加重语气|
| `<sub > `| 定义下标字|
| `<sup >` | 定义上标字|
| `<ins>` | 定义插入字|
|`<del>` | 定义删除字|	
对于大部分浏览器来说，着重文字就是斜体，但是未来可能会改变，所以最好不要混用。

引用、引用和术语定义：

| 标签 | 描述 |
| --- |--- |
|`<abbr>` | 定义缩写。（属性为title，鼠标放上有显示）|
|`<acronym>` | 定义首字母缩写。|
|`<address>` | 定义地址。（通常表现为斜体）|
|`<bdo>`| 定义文字方向。|
|`<blockquote>` | 定义长的引用。(会出现分段，且引用内容不与之前段落垂直方向一致。)|
|`<q>` | 定义短的引用语。（和“效果相同，但是在标点对齐，包括一些使用页面的时候<q>更好）|
| `<cite>` | 定义引用、引证。（斜体）|
| `<dfn>` | 定义一个定义项目。|
```
<address>
Written by Donald Duck.<br> 
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>
```
	
#Head
>在本节中，要了解到`<Head>`中常见的标签及其属性。

|标签|	描述|
|---|---|
|`<head>`|	定义了文档的信息|
|`<title>`|	定义了文档的标题|
|`<base>`|	定义了页面链接标签的默认链接地址|
|`<link>`|	定义了一个文档和外部资源之间的关系|
|`<meta>`|	定义了HTML文档中的元数据|
|`<script>`|	定义了客户端的脚本文件|
|`<style>`|	定义了HTML文档的样式文件|
· `<title>`元素能够：定义浏览器工具栏中的标题；提供页面被添加到收藏夹时显示的标题；显示在搜索引擎结果中的页面标题
· `<base>` 标签为页面上的所有链接规定默认地址或默认目标（target）： <base target="_blank" />
· `<link>` 标签定义文档与外部资源之间的关系。
· `<link>` 标签最常用于连接样式表：
· `<style>` 标签用于为 HTML 文档定义样式信息。
· 元数据（metadata）是关于数据的信息。`<meta>` 标签提供关于 HTML 文档的元数据。元数据不会显示在页面上，但是对于机器是可读的。
典型的情况是，meta 元素被用于规定页面的描述、关键词、文档的作者、最后修改时间以及其他元数据。
`<meta>` 标签始终位于 head 元素中。元数据可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务。

##CSS样式 ```<style>```
当浏览器读到一个样式表，它就会按照这个样式表来对文档进行格式化。有以下三种方式来插入样式表：
* 外部样式表 
```
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```
* 内部样式表
```
<head>
<style type="text/css">
body {background-color: red}
p {margin-left: 20px}
</style>
</head>
```
* 内联样式（当特殊的样式需要应用到个别元素时）
```
<p style="color: red; margin-left: 20px">
This is a paragraph
</p>
```

## CSS链接 ```<link>```
|常见属性|值|含义|
|---|---|---|
|href|URL|规定被链接文档的位置。|
|rel|alternate<p>author<p>help<p>icon<p>licence<p>next<p>pingback<p>prefetch<p>prev<p>search<p>sidebar<p>stylesheet<p>tag|规定当前文档与被链接文档之间的关系。|
|type|MIME_type|规定被链接文档的 MIME 类型。|

##元信息```<meta>```
```<meta>``` 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词,属性定义了与文档相关联的名称/值对。

|属性|值|描述|
|---|---|---|
|（必要）content|	some_text|	定义与 http-equiv 或 name属性相关的元信息|
|http-equiv|content-type<p>expires<p>refresh<p>set-cookie|把 content 属性关联到 HTTP 头部。|
|name|author<p>description<p>keywords<p>generator<p>revised<p>others|把 content 属性关联到一个名称。|
|scheme|	some_text|	定义用于翻译 content 属性值的格式。|

`name`属性有助于浏览器检索；
`http-equiv`是一个名称/值的对子，不同名称对应不同值有不同含义。`<meta http-equiv="charset" content="iso-8859-1">`

## ```<title>```
定义文档标题，在浏览器窗口的标题栏，收藏的书签等。

##`<base>`
`<base>` 标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接
```
<base href="http://www.runoob.com/images/" target="_blank">
```

##```<script>```
详见**JS字典**。

#```<body>```
##链接：
链接的 HTML 代码很简单。它类似这样：
```
<a href="url">Link text</a>
```
href 属性规定链接的目标。
开始标签和结束标签之间的文字被作为超级链接来显示。
name 属性规定锚（anchor）的名称。
您可以使用 name 属性创建 HTML 页面中的<font color='red'>书签</font>。
```
<a name="tips">基本的注意事项 - 有用的提示</a>
<a href="#tips">有用的提示</a>
<!--->或<--->
<a href="http://www.w3school.com.cn/html/html_links.asp#tips">有用的提示</a>
```

###图片`<img>`
`<img>`是空标签（它只包含属性，并且没有闭合标签）要在页面上显示图像，你需要使用源属性（src）。
**src** 指 "source"。源属性的值是图像的 URL 地址。`<img src="url" />`
**alt** 属性用来为图像定义一串预备的可替换的文本。替换文本属性的值是用户定义的。`<img src="boat.gif" alt="Big Boat">`
假如某个 HTML 文件包含十个图像，那么为了正确显示这个页面，需要加载 11 个文件。加载图片是需要时间的，所以我们的建议是：慎用图片。
多用相对路径。

|标签|效果|
|---|---|
|`<img src="picture.jpg">`|picture.jpg 位于与当前网页相同的文件夹|
|`<img src="images/picture.jpg">`|picture.jpg 位于当前文件夹的 images 文件夹中|
|`<img src="/images/picture.jpg">`|picture.jpg 当前站点根目录的 images 文件夹中|
|`<img src="../picture.jpg">`|picture.jpg 位于当前文件夹的上一级文件夹中|


###表格`<table>`
`<table>` 标签来定义表格。
**`<caption>`** 标签定义表格标题。
** `<tr>`** 标签定义行
**`<th>`** 标签进行定义表头列
**`<td>`** 标签定义值列。
数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。
如果不定义边框属性，表格将不显示边框。。
注释：`<table>` 元素不是作为布局工具而设计的。`<table>` 元素的作用是显示表格化的数据。
使用 `<table>` 元素能够取得布局效果，因为能够通过 CSS 设置表格元素的样式：`<table class="lamp">`

`<table>`标签中元素`border`定义边框。

###列表
无序列表是一个项目的列表，此列项目使用粗体圆点（典型的小黑圆圈）进行标记。
无序列表始于 **`<ul>`** 标签。每个列表项始于 **`<li>`**。
有序列表始于 **`<ol>`** 标签。每个列表项始于 **`<li>`** 标签。
自定义列表不仅仅是一列项目，而是项目及其注释的组合。
自定义列表以 **`<dl>`** 标签开始。每个自定义列表项以 **`<dt>`** 开始。每个自定义列表项的定义以 **`<dd>`** 开始。

## 块级标签
大多数 HTML 元素被定义为块级元素或内联元素。
编者注：“块级元素”译为 block level element。
块级元素在浏览器显示时，通常会以新行来开始（和结束）。
例子：`<hr>`,`<ol>`,`<div>`,`<h1>`, `<p>`, `<ul>`, `<table>`

###`<div>`
 `<div>` 元素是块级元素，它是可用于组合其他 HTML 元素的容器。
`<div>` 元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。
如果与 CSS 一同使用，`<div>` 元素可用于对大的内容块设置样式属性，所以`<div>` 元素的另一个常见的用途是文档布局。
注释：`<div>` 元素常用作布局工具，因为能够轻松地通过 CSS 对其进行
定位。

###`<hr>`
`<hr>`标签用来分隔 HTML 页面中的内容，并显示为一条水平线。
`<hr>`几乎没有属性。

##内联元素
内联元素在显示时通常不会以新行开始。“内联元素”译为 inline element。
例子：`<b>`, `<td>`, `<a>`, `<img>`
###`<a>`
`<a>`标签定义超链接，用于从一个页面链接到另一个页面。
href是最重要，几乎必须存在的属性。

|属性|值|描述|
|---|---|---|
|href|URL|	规定链接的目标 URL。|
|download|	filename|	指定下载链接|
|rel|alternate<p>author<p>bookmark<p>help<p>license<p>next<p>nofollow<p>noreferrer<p>prefetch<p>prev<p>search<p>tag|规定当前文档与目标 URL 之间的关系。仅在 href 属性存在时使用|
|target|_blank<p>_parent<p>_self<p>_top<p>framename|	规定在何处打开目标 URL。仅在 href 属性存在时使用。|
|type |MIME_type|	规定目标 URL 的 MIME 类型。仅在 href 属性存在时使用。|
注：MIME = Multipurpose Internet Mail Extensions。

###`<span>`
`<span>` 元素是内联元素，提供了一种将文本的一部分独立（单独处理）的方式。
`<span>` 元素也没有特定的含义。
当与 CSS 一同使用时，即在在标签内加入style属性，`<span>` 元素可用于为部分文本设置样式属性。


###`<input>`
`<input>`是输入标签。
该标签一般都在`<form>`标签内（子标签）

|属性|描述|
|---|---|
|text|文本域|
|password|密码字段|
|radio|单选按钮|
|checkbox|复选框|
|submit|提交按钮（需单独写方法）|

>粗浅认为：块级元素是一行一行的，如`<div>`中元素都在一行内排列；内联元素都是在一行内操作，如一个`<div>`中多个`<span>`都会在一行以内。

##可变标签
###`<button>`

|属性|值|描述|
|---|---|---|
|name|	name|	规定按钮的名称。|
|type|	button<p>reset<p>submit| 	规定按钮的类型。|
|value|	text|	规定按钮的初始值。可由脚本进行修改。|

###`<iframe>`
`<iframe>` 标签规定一个内联框架。
一个内联框架被用来在当前 HTML 文档中嵌入另一个文档。

|属性|	值|	描述|
|---|---|---|
|height|	pixels|	规定 `<iframe>` 的高度。|
|width|	pixels|	规定 `<iframe>` 的宽度。|
|src|	URL|	规定在 `<iframe>` 中显示的文档的 URL。|

###`<del>`和`<ins>`
`<del>`是横杠。
`<ins>`下划线。

##3.1 HTML5 语义元素

| 标签 | 描述 |
| --- | --- |
| header | 定义文档或节的页眉| 
| nav | 定义导航链接的容器| 
| section | 定义文档中的节| 
| article | 定义独立的自包含文章| 
| aside | 定义内容之外的内容（比如侧栏）| 
| footer | 定义文档或节的页脚| 
| details | 定义额外的细节| 
| summary | 定义 details 元素的标题| 

文字是自动响应的，图片不做成响应式可能出问题。

##3.2 框架
<font color='red'>学习</font>：Bootstrap是现成的CSS响应式框架
框架结构标签（`<frameset>`）
框架结构标签（`<frameset>`）定义如何将窗口分割为框架
每个 `<frameset>` 定义了一系列行或列
rows/columns 的值规定了每行或每列占据屏幕的面积（可以用百分比）

iframe 用于在网页内显示网页：
```
<iframe src="demo_iframe.htm" width="200" height="200"></iframe>
```
frameborder 属性规定是否显示 iframe 周围的边框。设置属性值为 "0" 就可以移除边框：
height 和 width 属性用于规定 iframe 的高度和宽度。
属性值的默认单位是像素，但也可以用百分比来设定（比如 "80%"）。
链接网址的属性是src

`<script>` 标签用于定义客户端脚本，比如 JavaScript。
script 元素既可包含脚本语句，也可通过 src 属性指向外部脚本文件。
必需的 type 属性规定脚本的 MIME 类型。
JavaScript 最常用于图片操作、表单验证以及内容动态更新。

##3.3 HTML 头部元素

|标签|描述|
|---|---|
|`<head>`	|定义关于文档的信息。|
|`<title>`	|定义文档标题。|
|`<base>`	|定义页面上所有链接的默认地址或默认目标。|
|`<link>`	|定义文档与外部资源之间的关系。|
|`<meta>`	|定义关于 HTML 文档的元数据。|
|`<script>`	|定义客户端脚本。|
|`<style>`	|定义文档的样式信息。|


在 HTML 中，某些字符是预留的。
在 HTML 中不能使用小于号（<）和大于号（>），这是因为浏览器会误认为它们是标签。
如果希望正确地显示预留字符，我们必须在 HTML 源代码中使用字符实体（character entities）。
字符实体类似这样：
&entity_name;
或者
&#entity_number;
如需显示小于号，我们必须这样写：&lt; 或 &#60;
提示：使用实体名而不是数字的好处是，名称易于记忆。不过坏处是，浏览器也许并不支持所有实体名称（对实体数字的支持却很好）。
[实体符号参考手册](https://www.w3school.com.cn/tags/html_ref_entities.html)
HTML 中的常用字符实体是不间断空格(```&nbsp;```)。
浏览器总是会截短 HTML 页面中的空格。如果您在文本中写 10 个空格，在显示该页面之前，浏览器会删除它们中的 9 个。如需在页面中增加空格的数量，您需要使用 ```&nbsp```; 字符实体。

##3.4 URL - Uniform Resource Locator（统一资源定位符）的语法规则
scheme://host.domain:port/path/filename
scheme - 定义因特网服务的类型。最常见的类型是 http
host - 定义域主机（http 的默认主机是 www）
domain - 定义因特网域名，比如 w3school.com.cn
:port - 定义主机上的端口号（http 的默认端口号是 80）
path - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）。
filename - 定义文档/资源的名称

由于 URL 常常会包含 ASCII 集合之外的字符，URL 必须转换为有效的 ASCII 格式。
URL 编码使用 "%" 其后跟随两位的十六进制数来替换非 ASCII 字符。
URL 不能包含空格。URL 编码通常使用 + 来替换空格。
[URL 编码参考手册](https://www.w3school.com.cn/tags/html_ref_urlencode.html)

#3.5 历史
从 Web 诞生早期至今，已经发展出多个 HTML 版本：

|版本|年份|
|---|---|
|HTML	|1991|
|HTML+	|1993|
|HTML 2.0	|1995|
|HTML 3.2	|1997|
|HTML 4.01 |1999|
|XHTML 1.0| 2000|
|HTML5	|2012|
|XHTML5|	2013|

HTML5 提供的新元素可以构建更好的文档结构：

|标签|	描述|
|---|---|
|`<article>`|	定义文档内的文章。|
|`<aside>`|	定义页面内容之外的内容。|
|`<bdi>`|	定义与其他文本不同的文本方向。|
|`<details>`|	定义用户可查看或隐藏的额外细节。|
|`<dialog>`|	定义对话框或窗口。|
|`<figcaption>`|	定义 <figure> 元素的标题。|
|`<figure>`|	定义自包含内容，比如图示、图表、照片、代码清单等等。|
|`<footer>`|	定义文档或节的页脚。|
|`<header>`|	定义文档或节的页眉。|
|`<main>`|	定义文档的主内容。|
|`<mark>`|	定义重要或强调的内容。|
|`<menuitem>`|	定义用户能够从弹出菜单调用的命令/菜单项目。|
|`<meter>`|	定义已知范围（尺度）内的标量测量。|
|`<nav>`|	定义文档内的导航链接。|
|`<progress>`|	定义任务进度。|
|`<rp>`|	定义在不支持 ruby 注释的浏览器中显示什么。|
|`<rt>`|	定义关于字符的解释/发音（用于东亚字体）。|
|`<ruby>`|	定义 ruby 注释（用于东亚字体）。|
|`<section>`|	定义文档中的节。|
|`<summary>`|	定义 <details> 元素的可见标题。|
|`<time>`|	定义日期/时间。|
|`<wbr>`|	定义可能的折行（line-break）。|


[HTML5 语义元素（很重要一个图）](https://www.w3school.com.cn/html/html5_semantic_elements.asp)