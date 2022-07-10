//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ISemaphore} from "@semaphore-protocol/contracts/interfaces/ISemaphore.sol";

/**
 * This contract is the admin of a Semaphore group, see https://semaphore.appliedzkp.org/docs/guides/groups
 * It allows anyone to join the group by presenting an identity commitment
 */
contract SemaphoreDemo {
    ISemaphore public immutable semaphore;
    uint256 public immutable groupId;

    constructor(ISemaphore _semaphore, uint256 _groupId) {
        semaphore = _semaphore;
        groupId = _groupId;
    }

    /**
     * @notice Join the group using an identity commitment
     * @param identityCommitment The identity commitment to add to the group
     */
    function join(uint256 identityCommitment) public {
        semaphore.addMember(groupId, identityCommitment);
    }
}
