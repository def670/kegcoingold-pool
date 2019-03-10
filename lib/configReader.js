/**
 * Cryptonote Node.JS Pool
 * https://github.com/dvandal/cryptonote-nodejs-pool
 *
 * Configuration Reader
 **/

// Load required modules
var fs = require('fs');

// Set pool software version
global.version = "v1.3.8 (Twixted Chaox)";

/**
 * Load pool configuration
 **/

// Get configuration file path
var configFile = (function(){
    for (var i = 0; i < process.argv.length; i++){
        if (process.argv[i].indexOf('-config=') === 0)
            return process.argv[i].split('=')[1];
    }
    return 'config.json';
})();

// Read configuration file data
try {
    global.config = JSON.parse(fs.readFileSync(configFile));
}
catch(e){
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}

/**
 * Developper donation addresses -- thanks for supporting my works!
 **/

var donationAddresses = {
    BTC: '3FFPk2mNDgSq2oSBZva1BES5A7XyZGCfQm',
    LTC: 'LdWFYntM5ZMhMDqxNePFXTBFvtxcGURL7B',
    DERO: 'dERirD3WyQi4udWH7478H66Ryqn3syEU8bywCQEu3k5ULohQRcz4uoXP12NjmN4STmEDbpHZWqa7bPRiHNFPFgTBPmcBjsYXTmR6G8NvTRGBT',
    GRFT: 'GMPHYf5KRkcAyik7Jw9oHRfJtUdw2Kj5f4VTFJ25AaFVYxofetir8Cnh7S76Q854oMXzwaguL8p5KEz1tm3rn1SA6oK63zRAkwLRseYJJD',
    MSR: '5t5mEm254JNJ9HqRjY9vCiTE8aZALHX3v8TqhyQ3TTF9VHKZQXkRYjPDweT9kK4rJw7dDLtZXGjav2z9y24vXCdRc1MPzaa9ZQwH5rqui2',
    XMR: '4Cf2TfMKhCgJ2vsM3HeBUnYe52tXrvv8X1ajjuQEMUQ8iU8kvUzCSsCEacxFhEmeb2JgPpQ5chdyw3UiTfUgapJBh9VHpAfWeYERqhY73B',
    SUMO: 'SumipDETyjLYi8rqkmyE9c4SftzYzWPCGA3XvcXbGuBYcqDQJWe8wp8NEwNicFyzZgKTSjCjnpuXTitwn6VdBcFZEFXLcTXHJqaVUvQezTr8Hh',
    XHV: 'hvi1aCqoAZF19J8pijvqnrUkeAeP8Rvr4XyfDMGJcarhbL15KgYKM1hN7kiHMu3fer5k8JJ8YRLKCahDKFgLFgJMYAfnibwKLZe9KTwPX8S9h',
    XTL: 'SEiStP7SMy1bvjkWc9dd1t2v1Et5q2DrmaqLqFTQQ9H7JKdZuATcPHUbUL3bRjxzxTDYitHsAPqF8EeCLw3bW8ARe8rYUDBynko7rrWCyKT5c',
    KEG: 'KjH5BqNbdJ9SCFrKo9hF2GF6H343JezjGdh3xWGzzcEBPGbBsbHq2uhN5d9b85ruMVeQQ6ydcZGs7SSaLGZu22qSB8ajivk',
    TRTL: 'TRTLuyc38h6NNBxjFug3km7NYqH3gf5mEh5tMHDFdvkz59MoKmT4LFvJZyWEXjSgCPiAznYagH2s1hdCBDh6GPR6UhgKmgwzHmJ'
};

global.donations = {};

var percent = config.blockUnlocker.devDonation;
var wallet = donationAddresses[config.symbol];
if (percent && wallet) {
    global.donations[wallet] = percent;
}
