import "./header.css"
import SolanaPhoto from "./../../assets/solanaLogo.png";

export default function header() {
    return(
        <header>
            <div className="displayFlex">
                <h1>SOLSCAN</h1>

                <div className="displayFlex"> 
                    <div className="displayFlex">
                        <img className="SolanaPhoto" src={SolanaPhoto} alt="" />
                        <p>$176.75 <span>+1.08%</span></p>
                    </div>
                    
                    <div>
                        <p>Avg Fee: <span>0.00001236</span></p>
                    </div>
                </div>
            </div>

            <div className="displayFlex">
                <p>Analytics</p>
                <p>Defi</p>
                <p>Leaderboard</p>
                <p>Blockchain</p>
                <p>Resources</p>

                <div>
                    <img className="SolanaPhoto" src={SolanaPhoto} alt="" />
                </div>
            </div>
        </header>
    )
}