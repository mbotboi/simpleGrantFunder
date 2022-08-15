//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "hardhat/console.sol";

pragma solidity ^0.8.0;

contract Grant {
    address private owner;
    IERC20 private token;

    struct grantStruct {
        uint256 grantId;
        address recipient;
        address tokenAddress;
        uint256 timestamp;
    }
    grantStruct public grant;
    mapping(address => uint256) public funderAmount;

    constructor(
        address _owner,
        uint256 _grantId,
        address _recipient,
        address _tokenAddress,
        uint256 _timestamp
    ) {
        token = IERC20(_tokenAddress);
        owner = _owner;
        grant = grantStruct(_grantId, _recipient, _tokenAddress, _timestamp);
    }

    event Fund(address funder, uint256 amount);
    event RemoveFund(address funder, uint256 amount);
    event ClaimGrant(address recipient, uint256 amount);

    function fundGrant(uint256 amount) external {
        require(!unlocked(), "grant funding period is over");
        funderAmount[msg.sender] += amount;
        token.transferFrom(msg.sender, address(this), amount);
        emit Fund(msg.sender, amount);
    }

    function removeFund(uint256 amount) external {
        require(
            funderAmount[msg.sender] >= amount,
            "not enough balance to withdraw"
        );
        require(!unlocked(), "cannot withdraw funds now");
        funderAmount[msg.sender] -= amount;

        token.transfer(msg.sender, amount);
        emit RemoveFund(msg.sender, amount);
    }

    function claimGrant() external {
        require(unlocked(), "grant claim period not yet exceeded");
        require(msg.sender == grant.recipient, "you are not the recipient");
        require(token.balanceOf(address(this)) > 0, "No tokens to claim");
        token.transfer(
            grant.recipient,
            token.balanceOf(address(this))
        );
        emit ClaimGrant(grant.recipient, token.balanceOf(address(this)));
    }

    function recipient() external view returns (address) {
        return grant.recipient;
    }

    function grantId() external view returns (uint256) {
        return grant.grantId;
    }

    function unlockTime() external view returns (uint256) {
        return grant.timestamp;
    }

    function blockTs() external view returns (uint256) {
        return block.timestamp;
    }

    function acceptedToken() external view returns (address) {
        return grant.tokenAddress;
    }

    function balance() external view returns (uint256) {
        return token.balanceOf(address(this));
    }

    function unlocked() public view returns (bool) {
        return grant.timestamp <= block.timestamp;
    }
}
