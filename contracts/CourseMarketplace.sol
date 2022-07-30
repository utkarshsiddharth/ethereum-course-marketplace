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

    /// Course alreay has an owner!
    error CourseHasOwner();

    /// Only owner has the access
    error OnlyOwner();

    // modifiers
    modifier onlyOwner() {
        if (msg.sender != getContractOwner()) {
            revert OnlyOwner();
        }
        _;
    }

    // mapping: courseHash to Course data
    mapping(bytes32 => Course) private ownedCourses;
    // mapping: courseId to courseHash
    mapping(uint256 => bytes32) private ownedCourseHash;

    // number of all courses + id of the course
    uint256 private totalOwnedCourses;

    // contract owner
    address payable private owner;

    constructor() {
        setContractOwner(msg.sender);
    }

    function purchaseCourse(bytes16 courseId, bytes32 proof) external payable {
        // here we are creating a unique hash using the course id and the address of msg.sender (user)
        bytes32 courseHash = keccak256(abi.encodePacked(courseId, msg.sender));

        if (hasCourseOwnership(courseHash)) {
            revert CourseHasOwner();
        }

        uint256 id = totalOwnedCourses++;
        ownedCourseHash[id] = courseHash;
        ownedCourses[courseHash] = Course({
            id: id,
            price: msg.value,
            proof: proof,
            owner: msg.sender,
            state: State.Purchased
        });
    }

    function getCourseCount() external view returns (uint256) {
        return totalOwnedCourses;
    }

    function getCourseHashAtIndex(uint256 _index)
        external
        view
        returns (bytes32)
    {
        return ownedCourseHash[_index];
    }

    function getCourseByHash(bytes32 _hash)
        external
        view
        returns (Course memory)
    {
        return ownedCourses[_hash];
    }

    function getContractOwner() public view returns (address) {
        return owner;
    }

    function transferOwnership(address _newOwner) external onlyOwner {
        setContractOwner(_newOwner);
    }

    function setContractOwner(address _newOwner) private {
        owner = payable(_newOwner);
    }

    function hasCourseOwnership(bytes32 _hash) private view returns (bool) {
        return ownedCourses[_hash].owner == msg.sender;
    }
}
