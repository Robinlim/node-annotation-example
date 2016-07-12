/**
* @Author: robin
* @Date:   2016-07-08 16:48:41
* @Email:  robinlim9@aliyun.com
* @Last modified by:   robin
* @Last modified time: 2016-07-12 11:11:59
*/

module.exports = {
    hit: function() {
        var self = this;
        console.info('knight hitting!!');
        process.nextTick(function() {
            self.flight(function() {
                console.info('knight flight');
            });
        });
        this.die();
        return "result";
    },
    flight: function(cb) {
        console.info('knight ready to flight, wait for 1000 ms');
        setTimeout(function() {
            cb();
        }, 1000);
    },
    die: function(){
        // 同步错误也支持
        console.log('knight sync die!')
        setTimeout(function() {
            console.log('knight async die!')
            throw new Error('knight async die');
        },1000);
        throw new Error('knight sync die');

    }
};
