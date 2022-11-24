import React, { useState } from 'react'
import './connectbutton.css'
import Web3 from 'web3'
import Web3Modal from "web3modal";
export default function Connect() {
    const[buttontext,settext]=useState("Connect Wallet")
       const connect=async()=>{
         
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
          })
          return provider
    }
    return (
        <div >
        <button
        className='connect-button'
        onClick={connect}
        >   Connect Wallet
        </button>
        </div>
    )
}

