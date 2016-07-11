module.exports = {
    hit: function() {
        var self = this;
        console.info('knight hitting!!');
        process.nextTick(function() {
            self.flight(function() {
                console.info('knight flight');
            });
        });
        this.die(new Date(), function(){
            require('fs').readFile('./NotExistFIle');
        });
        return "result";
    },
    flight: function(cb) {
        console.info('knight ready to flight, wait for 1000 ms');
        setTimeout(function() {
            cb();
        }, 1000);
    },
    die: function(time, cbk){
        // console.log('knight die!')
        // throw new Error('knight die');
        
        // cbk();
        
        setTimeout(function() {
            console.log('knight die!')
            throw new Error('knight die');
        },1000);
    }
};
