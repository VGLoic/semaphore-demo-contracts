//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import {ISemaphore} from "@semaphore-protocol/contracts/interfaces/ISemaphore.sol";

contract SemaphoreDemo {
    ISemaphore public immutable semaphore;
    uint256 public immutable groupId;

    constructor(ISemaphore _semaphore, uint256 _groupId) {
        semaphore = _semaphore;
        groupId = _groupId;
    }

    function join(uint256 identityCommitment) public {
        semaphore.addMember(groupId, identityCommitment);
    }
}
