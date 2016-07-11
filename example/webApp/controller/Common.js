/*@ControllerAdvice*/
module.exports = {
    /*@ExceptionHandler("code=ENOENT")*/
    enoent: function(err, req, res){
        console.error('没这个文件！原始错误信息：'+JSON.stringify(err))
        res.end('reach');
    },
    /*@ExceptionHandler("EWRONGPARAM")*/
    wrongParam: function(err, req, res){
        res.end('wrong param');
    },
    // 通常情况这里会放置一个最终的无参数ExceptionHandler，可以承接没有被处理的所有错误，用以返回错误页面
    /*@ExceptionHandler*/
    fin: function(err, req, res){
        res.end('reach fin')
    }
};