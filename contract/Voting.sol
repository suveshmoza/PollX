// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

contract Ballot{
    // Store all new polls here
    struct Poll{
        address pollAddress;
        string title;
    }
    Poll [] deployedPolls;
    function createPoll(string memory title,string memory description,string[] memory options) public{
        address newPoll=address(new Voting(title,description,options));
        deployedPolls.push(Poll(newPoll,title));
    }
    function getPoll()public view returns(Poll[] memory){
        return deployedPolls;
    }
}

contract Voting{
    // title,description and candidate list
    string title;
    string description;
    string[] public candidateList;
    // list for storing voter list
    mapping(uint256=>bool) voterList;
    // list for storing count
    mapping(string=>uint256) voteCount;
    // total votes received
    uint256 totalVotes;

    // constructor 
    constructor(string memory _title,string memory _description,string[] memory candidates){
        title=_title;
        description=_description;
        candidateList=candidates;
        totalVotes=0;
    }
    
    // returns candidate list
    function getCandidateList() public view returns(string[] memory){
        return candidateList;
    }

    // returns total votes
    function getTotalVotes() public view returns(uint256){
        return totalVotes;
    }

    // give vote
    function giveVote(string calldata candidate) public{
        totalVotes++;
        voteCount[candidate]=voteCount[candidate]+1;
    }

    //decides winner
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

    // get detailed summary
    function getSummary() public view returns(string memory,string memory,string[] memory,uint256){
        return (
            title,
            description,
            candidateList,
            totalVotes
        );
    }

  }
