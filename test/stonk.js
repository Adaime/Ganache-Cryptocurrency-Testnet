const stonk = artifacts.require("./stonk.sol");

contract(stonk, function(accounts) {
	
    it ('sets the total supply upon deployment', function() {
        return stonk.deployed().then(function(instance) {
            tokenInstance = instance;
            return tokenInstance.totalSupply();}).then(function(totalSupply){
                assert.equal(totalSupply.toNumber(), 1000000000000000, "sets the total supply to 100000000000000000");
            });
        });
    })

