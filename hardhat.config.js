require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {},
    polygon: {
      url: process.env.INFURA_ENDPOINT,
      accounts: [`0x${process.env.pk3}`]
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.9"
      }
    ]
  }
};
