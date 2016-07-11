var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', function(worker, code, signal) {
        console.log('[worker] ' + worker.id + ' died');
    });
} else if (cluster.isWorker) {
    console.log('[worker] ' + cluster.worker.id + ' start');
    require("./app");
}
