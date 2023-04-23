//npm install @truffle/hdwallet-provider
const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey=['93e387cbade5f8cda011cf38c54a3dddb3a52254ae28d2307dc27ab6ca0bbb1b']
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*", // Match any network id
      gas: 5000000
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(privateKey, `https://data-seed-prebsc-1-s1.binance.org:8545/`),
      network_id: 97,
      // confirmations: 10,
      // timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(privateKey, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      // confirmations: 10,
      // timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version:"0.8.19",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
