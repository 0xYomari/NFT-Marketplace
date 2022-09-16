require("@nomicfoundation/hardhat-toolbox")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
   defaultNetwork: "hardhat",
   networks: {
      hardhat: {
         chainId: 31337,
      },
   },
   solidity: "0.8.7",
}
