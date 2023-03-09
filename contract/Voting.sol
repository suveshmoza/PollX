// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Voting{
    string[] public candidateList;
    mapping(uint256=>bool) voterList;
    mapping(string=>uint256) voteCount;
    uint256 totalVotes;

    struct Summary{
        string candidateName;
        uint256 count;
    }

    constructor(string[] memory candidates){
        candidateList=candidates;
        totalVotes=0;
    }
    
    function getCandidateList() public view returns(string[] memory){
        return candidateList;
    }

    function getTotalVotes() public view returns(uint256){
        return totalVotes;
    }

    function decideWinner()public view returns(string memory){
        string memory winner=candidateList[0];
        uint256 winnerVotes=voteCount[candidateList[0]];
        for(uint i=1;i<candidateList.length;i++){
            if(voteCount[candidateList[i]]>winnerVotes){
                winner=candidateList[i];
                winnerVotes=voteCount[candidateList[i]];
            }
        }
        return winner;
    }

    function getVotingSummary() public view returns(Summary[] memory){
        Summary[] memory statistics;
        for(uint i=0;i<candidateList.length;i++){
            statistics[i]=Summary(candidateList[i],voteCount[candidateList[i]]);
        }
        return statistics;
    }
}