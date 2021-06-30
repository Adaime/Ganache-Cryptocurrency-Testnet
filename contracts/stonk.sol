pragma solidity >=0.4.22 <0.9.0;

contract stonk {

    uint public totalSupply;

    mapping(address => uint) public balanceOf;

    constructor(uint _initialSupply) public {
        totalSupply = _initialSupply;
        // allocate the initial supply
    }
}

