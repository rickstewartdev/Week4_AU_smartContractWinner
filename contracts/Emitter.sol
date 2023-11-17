// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

interface Contract {
    function attempt() external;
}

contract Emitter {
    function emitter(address someAdress) external {
        bytes4 signature = bytes4(keccak256("attempt()"));
        (bool success, ) = someAdress.call(abi.encodePacked(signature));
        require(success);
    }
}
