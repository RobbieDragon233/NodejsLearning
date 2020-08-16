###8.14
跨域做了一下改了成功了。但是协议好像还是存在问题，在`node 01.js`后，运行`index.html`，按“连接”按钮，报错
```
spread.js:25 GET http://127.0.0.1:8080/ net::ERR_CONNECTION_REFUSED
(anonymous) @ spread.js:25
e.exports @ spread.js:25
e.exports @ spread.js:25
Promise.then (async)
r.request @ spread.js:25
r.<computed> @ spread.js:25
(anonymous) @ spread.js:25
getData @ index.html:53
invokeWithErrorHandling @ vue.js:1863
invoker @ vue.js:2188
original._wrapper @ vue.js:7547
spread.js:25 Uncaught (in promise) Error: Network Error
    at e.exports (spread.js:25)
    at XMLHttpRequest.l.onerror (spread.js:25)
e.exports @ spread.js:25
l.onerror @ spread.js:25
Promise.then (async)
getData @ index.html:53
invokeWithErrorHandling @ vue.js:1863
invoker @ vue.js:2188
original._wrapper @ vue.js:7547
```



###8.15

vue里面正常写；nodejs里面用express载入vue，我本来打算按一个按钮，然后就与nodejs交互，但是事件我写不来，没办法，我就写了一个如果点击，就访问/hh页面，然后我在nodejs中判断如果是/hh页面就返回一堆数据，`response.data`就可以取得JSON数据。

解决跨域代码：

```js
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
```

