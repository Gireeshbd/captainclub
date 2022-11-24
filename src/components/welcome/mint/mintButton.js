import React from "react";
import './mintButton.css'
import {abi,contractAddress} from '../constants.js'
import Connect from "../../Navbar/connectbutton";
import Web3 from "web3";
import Web3Modal from "web3modal";
export function MintButton(){
    const mint=async()=>{
        console.log(abi)
        console.log(contractAddress)
       
        const WalletConnectProvider = window.WalletConnectProvider.default;
        let providerOptions = {
            walletconnect: {
              package: WalletConnectProvider,
              options: {
                infuraId: "b50bee145172497d9576a6f79b1209aa",
                //infuraId:'JuKirzHWDP97kprdQEkmzv0X7J8mz64emhs4Os70',
                chainId:56,
                rpc: {
                  // 1: "https://mainnet.infura.io/v3/b50bee145172497d9576a6f79b1209aa",
                  56: "https://bsc-dataseed.binance.org",
                },
              }
            },
          };
        console.log('function called')
        const web3Modal = new Web3Modal({
            network: "mainnet", // optional
            cacheProvider: true, // optional
             providerOptions// required
          });
          
          const provider = await web3Modal.connect();
          const web3 = new Web3(provider);
          const account=web3.eth.getAccounts()
          account.then((result)=>{
              console.log(result[0])
              const contractInstance= new web3.eth.Contract(abi,contractAddress)
              let txTransfer = {
                from: result[0],
                to: contractAddress,
                
                
                // maxFeePerGas:web3.utils.toHex(web3.utils.toHex( web3.utils.toWei( '1.5' , 'gwei' ) ),),
               value:"100000000000000000",
                data: contractInstance.methods.mint(5).encodeABI()
            }
            let approve=web3.eth.sendTransaction(txTransfer);
            approve.then((result)=>{
                console.log(result)
            }).catch((e)=>{
                console.error(e)
            })   
            })
            
    }
    return(<>
    
    <button className="mint-button" onClick={mint}>
        Mint Now
    </button>
    </>)
}