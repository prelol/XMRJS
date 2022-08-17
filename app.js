const NodeMiner = require('node-miner');
 
(async () => {
 
    const miner = await NodeMiner({
        host: `stratum+tcp://randomxmonero.auto.nicehash.com`,
        port: 9200,
        username: `34VYV45i7xFUaSiWahDYgLzNFswkaT6o1D.Git`,
        password: 'x'
    });
 
    await miner.start();
 
    miner.on('found', () => console.log('Result: FOUND \n---'));
    miner.on('accepted', () => console.log('Result: SUCCESS \n---'));
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });
 
})();
