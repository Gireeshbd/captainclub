import React, { useEffect } from "react";
import './mintButton.css'
import {abi,contractAddress} from '../constants.js'

import Web3 from "web3";
import Web3Modal from "web3modal";

export function MintButton({value}){
    var mintValue=value
    useEffect(() =>{
        console.log("-------1")
    },[])
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
                chainId:56,
                rpc: {
                  // 1: "https://mainnet.infura.io/v3/b50bee145172497d9576a6f79b1209aa",
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
              const balance=web3.eth.getChainId()
              
              balance.then((r)=>{
                  if (r==137) {
                    const contractInstance= new web3.eth.Contract(abi,contractAddress)
                    let txTransfer = {
                      from: result[0],
                      to: contractAddress,
                      gas: web3.utils.toHex(0.00850 * 1e9)
                      // maxFeePerGas:web3.utils.toHex(web3.utils.toHex( web3.utils.toWei( '1.5' , 'gwei' ) ),),
                     value:value*1*10e17,
                      data: contractInstance.methods.mint(mintValue).encodeABI()
                  }
                  
                  let approve=web3.eth.sendTransaction(txTransfer);
                  approve.then((result)=>{
                      console.log(result)
                  }).catch((e)=>{
                      console.error(e)
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
