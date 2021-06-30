const stonk = artifacts.require("./stonk.sol");

module.exports = function(deployer) {
  deployer.deploy(stonk);
};

