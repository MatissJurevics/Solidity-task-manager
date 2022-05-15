import {ethers} from 'ethers';
import contractABI from "./contractABI.ts";
let contractAddress = "0xAc0fD5105Cd6e0558a68a354F1709DBaf683a8db";



const setupContract = async () => {
    
    try {
        const { ethereum } = window
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum, "ropsten")
            await provider.send('eth_requestAccounts', []); 
            const signer = provider.getSigner()
            const contract = await new ethers.Contract(contractAddress, contractABI, signer)
            return contract
        }
    } catch (err) {
        console.log(err)
    }
}

export default {setupContract}