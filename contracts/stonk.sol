pragma solidity >=0.4.22 <0.9.0;

contract stonk {

    uint public totalSupply;
    constructor() public {
        totalSupply = 1000000000000000;
         // It is better to initialize the old variable
    }
}

//function totalSupply() public view returns (uint256)