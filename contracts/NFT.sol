//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private s_tokenIds;
    address contractAddress;

    constructor(address marketPlaceAddress)
        ERC721("Metaverse Tokens@", "METV")
    {
        contractAddress = marketPlaceAddress;
    }

    function mintNFT(string memory tokenURI) public returns (uint256) {
        s_tokenIds.increment();
        uint256 newTokenId = s_tokenIds.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        setApprovalForAll(contractAddress, true);
        return newTokenId;
    }
}
