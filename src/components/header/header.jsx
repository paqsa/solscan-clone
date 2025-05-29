import "./header.css"
import SolanaPhoto from "./../../assets/solanaLogo.png";

export default function header() {
    return(
        <header>
            <div className="displayFlex">
                <h1>SOLSCAN</h1>

                <div style={{width: '285px', marginLeft: '20px'}} className="displayFlex headerStyle"> 
                    <div className="displayFlex">
                        <img className="SolanaPhoto" src={SolanaPhoto} alt="" />
                        <p style={{display: 'flex'}}>$176.75 <span className="procentColor">+1.08%</span></p>
                    </div>
                    
                    <div>
                        <p style={{display: 'flex'}}>Avg Fee: <span className="solFeeColor">0.00001236</span></p>
                    </div>
                </div>
            </div>

            <div className="displayFlex alignItemsEnd">
                <div className="displayFlex contentOfHeader">
                <p>Analytics</p>
                <p>Defi</p>
                <p>Leaderboard</p>
                <p>Blockchain</p>
                <p>Resources</p>
                <p>Sign in</p>
                <div>
                    <img className="SolanaPhoto" src={SolanaPhoto} alt="" />
                </div>
            </div>
            </div>
        </header>
    )
}