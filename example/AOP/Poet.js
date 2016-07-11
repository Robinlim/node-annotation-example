/*@Aspect*/
module.exports = {
    /*@PointCut({module:"\/Knight$", method:"hit"})*/
    /*@Before*/
    say: function() {
        console.info('Poet say: knight will hit!!');
    },
    /*@Around*/
    around: function(fn){
        console.info('Poet say: around before');
        var rs = arguments[arguments.length - 1 ]();
        console.info(rs);
        console.info('Poet say: around leave');
        return rs;
    },
    /*@Around*/
    around2: function(fn){
        console.info('Poet say: around before2');
        var rs = arguments[arguments.length - 1 ]();
        console.info(rs);
        console.info('Poet say: around leave2');
        return rs;
    },
    /*@After*/
    result: function(){
        console.info('Poet say: knight hitted!!');
    },
    /*@Throws*/
    hidThrow: function(err){
        console.info('Poet say: knight hit wrong!!', err);
    },
    /*@PointCut({module:"\/Knight$", method:"flight"})*/
    /*@AfterReturning*/
    flight: function(){
        console.info('Poet say: knight will flight!!');
    },
    /*@PointCut({module:"\/Knight$", method:"die"})*/
    /*@Throws*/
    die: function(err, time){
        console.info('Poet say: knight die error!!');
        //console.error(time, err, err.stack);
    }
};
