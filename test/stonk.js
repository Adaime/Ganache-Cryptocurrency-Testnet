const stonk = artifacts.require("./stonk.sol");

contract(stonk, function(accounts) {
	const tokenInstance;
	
    it ('sets the total supply upon deployment', function() {
        return stonk.deployed().then(function(instance) {
            tokenInstance = instance;
            return tokenInstance.totalSupply();}).then(function(totalSupply){
                assert.equal(totalSupply.toNumber(), 1000000000000000, "sets the total supply to 100000000000000000");
                return tokenInstance.balanceOf(accounts[0]);}).then(function(adminBalance) {
                	assert.equal(adminBalance.toNumber(), 1000000000000000, 'it allocates the initial supply to the admin account')
            });
        });
    })

