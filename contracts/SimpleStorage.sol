pragma solidity ^0.8.19;

contract SimpleStorage {
    string _address;
    uint landArea;
    string _owner;

    function updateData(string memory _address,uint _landArea, string memory _owner) external{
        _address=_address;
        landArea=_landArea;
        _owner=_owner;
    }

    function getAddress() external view returns(string memory){
        return _address;
    }
    function getLandArea() external view returns(uint){
        return landArea;
    }
    function getOwner() external view returns(string memory){
        return _owner;
    }
}