import React, { useEffect } from "react";
import './mintButton.css'
import {abi,contractAddress} from '../constants.js'
import './data.env'
import Web3 from "web3";
import Web3Modal from "web3modal";

export function MintButton({value}){
    var mintValue=value
    const MintNow=async()=>{
        console.log(abi)
        
        console.log(contractAddress)
       console.log(mintValue)
      
        const WalletConnectProvider = window.WalletConnectProvider.default;
        let providerOptions = {
            walletconnect: {
              package: WalletConnectProvider,
              options: {
                infuraId: "b50bee145172497d9576a6f79b1209aa",
                //infuraId:'JuKirzHWDP97kprdQEkmzv0X7J8mz64emhs4Os70',
                chainId:137,
                rpc: {
                   1: "https://mainnet.infura.io/v3/b50bee145172497d9576a6f79b1209aa",
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
          const web3 =new Web3(provider);
          const account=web3.eth.getAccounts()
          account.then((result)=>{
              console.log(result[0])
              const balance=web3.eth.getChainId()
              
              balance.then((r)=>{
                  if (r==137) {
                    const contractInstance= new web3.eth.Contract(abi,contractAddress)
                    let txTransfer = {
                      from: result[0],
                      to: contractAddress,
                    //  gas: web3.utils.toHex(web3.utils.toWei( '.028' , 'gwei' )),
                     maxPriorityFeePerGas:250000000000,
                      maxFeePerGas:250000000000,
                     value:value*15*10e17,
                     gas:21000,
                      data: contractInstance.methods.mint(mintValue).encodeABI()
                  }
                  
                  let approve=web3.eth.sendTransaction(txTransfer);
                  approve.then((result)=>{
                      console.log(result)
                      alert(result)
                  }).catch((e)=>{
                      console.error(e)
                      alert(e.message)
                  })     
                  }
                  else{
                      alert("Please connect to polygon chain")
                  }
                   
                
              })
            })
            
    }
    return(<>
    
    <button className="mint-button" onClick={MintNow}>
        Mint Now
    </button>
    </>)
}