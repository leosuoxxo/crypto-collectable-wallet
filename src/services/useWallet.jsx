import { useState, useContext, useEffect, createContext } from 'react'
import Web3 from 'web3'

export const useWallet = () => {
  const [account, setAccount] = useState(null)

  const connect = async () => {
    // Check if MetaMask is installed on user's browser
    if (window.ethereum) {
      const web3 = new Web3(Web3.givenProvider)
      const accounts = await web3.eth.getAccounts()
      setAccount(accounts[0])
    }
  }

  useEffect(() => {
    connect()
  }, [])

  return { web3, account }
}

const WalletContext = createContext()

export const WalletProvider = ({ children }) => {
  const value = useWallet()

  return (
    <WalletContext.Provider value={value}>
      {value.account ? children : '請連接您的 MetaMask'}
    </WalletContext.Provider>
  )
}

export const useWalletService = () => useContext(WalletContext)
