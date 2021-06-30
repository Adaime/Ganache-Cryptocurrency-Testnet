const stonk = artifacts.require("./stonk.sol");

module.exports = function(deployer) {
  deployer.deploy(stonk, 1000000000000000);
};

