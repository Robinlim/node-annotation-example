var fs = require('./SyncLib').fs,
    path = require('path');
module.exports = {
    /*@AsyncWrap*/
    readFileSync: require('fs').readFile,
     /*@AsyncWrap*/
    sleep: function(ms, cbk){
        setTimeout(cbk, ms);
    },
    /*@Async*/
    do1: function(ms){
        var a = this.readFileSync(path.join(__dirname, './text.txt')).await();
        this.sleep(ms).await();
        return a.toString();
    },
    /*@Async*/
    do2: function(file){
        var a = fs.readFileSync(file).await();
        return a.toString();
    },
    /*@Async*/
    fin: function(ms){
        var a1 = this.do1(ms).await();
        var a2 = this.do2(path.join(__dirname, './main.js')).await();
        return a1;
    }
}