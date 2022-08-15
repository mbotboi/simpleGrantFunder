//SPDX-License-Identifier: MIT
import "hardhat/console.sol";

pragma solidity ^0.8.0;

interface IGrantFactory {
    struct grantStruct {
        uint256 grantId;
        address recipient;
        address tokenAddress;
        uint256 timestamp;
    }

    function getGrantInfo(uint256 id)
        external
        view
        returns (grantStruct memory);

    function getActiveGrants() external view returns (uint256[] memory);
    function grantId() external view returns (uint256);
    function grants(uint256) external view returns (address);
}

interface IGrant {
    function balance() external view returns (uint256);
    function grantId() external view returns (uint256);
}

contract GrantsQuery {
    IGrantFactory factory;

    struct grantStruct {
        uint256 grantId;
        address recipient;
        address tokenAddress;
        uint256 timestamp;
        uint256 balance;
        address grantAddress;
    }

    constructor(address _grantFactory) {
        factory = IGrantFactory(_grantFactory);
    }

    function getAllGrants()
        external
        view
        returns (grantStruct[] memory allData)
    {
        allData = new grantStruct[](factory.grantId());
        console.log("in get");
        for (uint256 i = 0; i < allData.length; i++) {
            console.log("start of loop %s", i);
            IGrantFactory.grantStruct memory currG = factory.getGrantInfo(i);
            console.log("currId %s", currG.grantId);
            console.log("recipient %s", currG.recipient);
            uint256 balance = grantBalance(i);
            console.log(balance);
            allData[i] = grantStruct(
                currG.grantId,
                currG.recipient,
                currG.tokenAddress,
                currG.timestamp,
                balance,
                factory.grants(i)
            );
        }
        return allData;
    }

    function grantBalance(uint256 _id) internal view returns (uint256 balance) {
        return _grantBalance(factory.grants(_id));
    }

    function _grantBalance(address _addr) internal view returns (uint256) {
        try IGrant(_addr).balance() returns (uint256 balance) {
            return balance;
        } catch {
            return 0;
        }
    }
}
