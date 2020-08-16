var fs = require('fs');

//我测了一下，用let 和 匿名函数都不会出错，我思考了一下应该是因为let的局部变量特性。
//如果for里面是var的话，fs.stat里面的i就会全部都是i=max+1，所以会出错。
//从console可以看出，在for中，是先执行9,10然后I/O异步，再次执行9,10，等完了之后才又执行10以后语句。
fs.readdir('./test/',function(err, files){
    var all = [];
    for(let i = 0; i < files.length; i++){
        console.log(files[i]);
        fs.stat('./test/' + files[i], function(err, stats){
            //如果all的目录数量不是由少变多，就说明异步会出问题
            console.log(all);
            if(stats.isDirectory()){
                all.push(files[i]);        
            }
        })
    }
    // (function iterator(i){
    //     if(i == files.length){
    //         console.log("This is end:" + all);
    //         return ;
    //     }
    //     fs.stat('./test/' + files[i], function(err, stats){
    //         console.log(files[i]);
    //         if(stats.isDirectory()){
    //             all.push(files[i])
    //         }
    //         iterator(i + 1);
    //     })
    // })(0);
})