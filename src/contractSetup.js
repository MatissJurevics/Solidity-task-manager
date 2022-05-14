import {ethers} from 'ethers';



const setupContract = async () => {
    let contractAddress = "0xAc0fD5105Cd6e0558a68a354F1709DBaf683a8db";
    let contractABI = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_title",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_id",
                    "type": "string"
                }
            ],
            "name": "addTask",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "title",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "id",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Tasks.Task[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_id",
                    "type": "string"
                }
            ],
            "name": "removeTask",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "title",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "id",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Tasks.Task[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "taskList",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "id",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "viewTasks",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "title",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "id",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Tasks.Task[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    let contract
    var signer;
    let provider = new ethers.providers.Web3Provider(window.ethereum, "ropsten");
    provider.send("eth_requestAccounts", []).then(() => {
        provider.listAccounts().then((accounts) => {
            console.log(accounts)
            signer = provider.getSigner(accounts[0]);
            contract = new ethers.Contract(contractAddress, contractABI, signer)
        })
    })
    console.log(provider.listAccounts())
    let step1 = await provider.send("eth_requestAccounts", [])
    let step2 = await provider.listAccounts()
    console.log(step2)
    contract = new ethers.Contract(contractAddress, contractABI, signer)
    console.log(signer)
    console.log(contract)
    return contract
}

export default {setupContract}