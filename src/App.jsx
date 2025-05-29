import { useState } from 'react'
import './App.css'
import './index.css'
import Header from "./components/header/header"
import Explore from "./components/explore/explore"
import TopMarketsCard from "./components/topmarketss/topmarkets"
import SolanaInformation from "./components/startContent/solanaInformation/solanainfo"

function App() {
  const [count, setCount] = useState(0)
  const topMarketsNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  

  return (
    <div className='mainContent'>

      <div className='solanaStartContentBackground'>
        <div className='contentStartOfFirst'>
          <Header></Header>
          <Explore></Explore>

      <div className='topMarketsContainer'>
        {topMarketsNumber.map((topMarketsNumber) => {
          return(
            <TopMarketsCard
            key={topMarketsNumber}
            topMarketsNumber={topMarketsNumber}
            ></TopMarketsCard>
          )
        })}
      </div>

      </div>
       </div>
      
      <SolanaInformation></SolanaInformation>
       
    </div>
  )
}

export default App
