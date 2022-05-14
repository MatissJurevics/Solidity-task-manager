// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Tasks {
    struct Task {
        string title;
        string id;
    }
    Task[] public taskList;
    Task private removeMe;

    function addTask(string memory _title, string memory _id) public returns(Task[] memory)  {
        Task memory newTask;
        newTask = Task({title:_title, id:_id});
        taskList.push(newTask);
        return(taskList);
    }
    function removeTask(string memory _id) public returns(Task[] memory) {
        for (uint8 i = 0; i<taskList.length; i++) {
            if (keccak256(abi.encodePacked(taskList[i].id)) == keccak256(abi.encodePacked(_id))) {
                removeMe = taskList[i];
                taskList[i] = taskList[taskList.length-1];
                taskList[taskList.length - 1] = removeMe;
                taskList.pop();
                return(taskList);
            }
        }
    }
    function viewTasks() public view returns(Task[] memory)  {
        return(taskList);
    }
}