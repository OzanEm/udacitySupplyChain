const HDWallet = require('@truffle/hdwallet-provider');

require("dotenv").config();



module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    avalanche : {
      provider : new HDWallet(process.env.MNEMONIC, process.env.FUJI_CHAIN),
      network_id : 43113
    }
  },
  compilers: {
    solc: {
      version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
      
    }
  }
 

  
};