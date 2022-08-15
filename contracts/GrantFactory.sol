//SPDX-License-Identifier: MIT

import "./Grant.sol";
import "hardhat/console.sol";
pragma solidity ^0.8.0;

contract GrantFactory {
    address private owner;
    uint256 public grantId = 0;

    struct grantStruct {
        uint256 grantId;
        address recipient;
        address tokenAddress;
        uint256 timestamp;
    }
// 0x9df27Aa6Dd8f1d1786200C1FeE2BD60538fE066d
// 0x332C7aC34580dfEF553B7726549cEc7015C4B39b
    mapping(uint256 => address) public grants;
    // mapping(uint256 => grantStruct) public grants;
    event CreateGrant(
        uint256 grantId,
        address grantAddress,
        address recipient,
        address tokenAddress,
        uint256 timestamp,
        address grantCreator
    );

    constructor() {
        owner = msg.sender;
    }

    function createGrant(
        address _recipient,
        address _tokenAddress,
        uint256 _timestamp
    ) external {
        uint256 currentGrantId = grantId;
        grantId += 1;

        Grant newGrant = new Grant(
            address(this),
            currentGrantId,
            _recipient,
            _tokenAddress,
            _timestamp
        );
        grants[currentGrantId] = address(newGrant);
        emit CreateGrant(
            currentGrantId,
            address(newGrant),
            _recipient,
            _tokenAddress,
            _timestamp,
            msg.sender
        );
    }

    function getGrantsForRecipient(address recipient)
        public
        view
        returns (uint256[] memory)
    {
        uint256[] memory allIds = new uint256[](grantId);
        uint256 occupiedIndex = 0;
        for (uint256 i = 0; i < grantId; i++) {
            if (Grant(grants[i]).recipient() == recipient) {
                allIds[occupiedIndex] = i;
                occupiedIndex++;
            }
        }
        uint256[] memory ids = new uint256[](occupiedIndex);
        for (uint256 i = 0; i < occupiedIndex; i++) {
            ids[i] = allIds[i];
        }
        return ids;
    }

    function getActiveGrants() external view returns (uint256[] memory) {
        uint256[] memory allIds = new uint256[](grantId);
        uint256 occupiedIndex = 0;
        for (uint256 i = 0; i < grantId; i++) {
            if (!Grant(grants[i]).unlocked()) {
                allIds[occupiedIndex] = i;
                occupiedIndex++;
            }
        }
        uint256[] memory ids = new uint256[](occupiedIndex);
        for (uint256 i = 0; i < occupiedIndex; i++) {
            ids[i] = allIds[i];
        }
        return ids;
    }

    function getGrantInfo(uint256 id) public view returns (grantStruct memory) {
        (
            uint256 _grantId,
            address _recipient,
            address _tokenAddress,
            uint256 _timestamp
        ) = Grant(grants[id]).grant();
        return grantStruct(_grantId, _recipient, _tokenAddress, _timestamp);
    }
}

