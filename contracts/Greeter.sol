//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/metatx/ERC2771Context.sol";

contract Greeter is ERC2771Context {
  string greeting;

  constructor(string memory _greeting, address trustedForwarder) ERC2771Context(address(trustedForwarder)) {
    greeting = _greeting;
  }

  function greet() public view returns (string memory) {
    return greeting;
  }

  function setGreeting(string memory _greeting) public {
    greeting = _greeting;
  }
}