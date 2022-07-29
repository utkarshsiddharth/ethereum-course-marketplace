// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

contract CourseMarketplace {
    enum State {
        Purchased,
        Activated,
        Deactivated
    }

    struct Course {
        uint256 id; // 32
        uint256 price; // 32
        bytes32 proof; // 32
        address owner; // 20
        State state; // 1
    }

    function purchaseCourse(bytes16 courseId, bytes32 proof)
        external
        payable
        returns (bytes32)
    {
        bytes32 courseHash = keccak256(abi.encodePacked(courseId, msg.sender));
        return courseHash;
    }
}
