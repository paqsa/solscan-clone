import "./tokenDash.css";
import trumpPhoto from "./../../../assets/tokenDashboard/trump.png"

export default function tokenDashboard() {
    return (
        <div className="tokenDashboard">
            <div className="tokenContent">

                <p>Token Dashboard</p>

                <div style={{display: 'flex'}}>
                    <p className="tokenWidth">Token</p>
                    <p className="symbolWidth">Symbol</p>
                    <p className="priceWidth">Price</p>
                    <p className="marketWidth">Market Cap (F.D)</p>
                </div>

                <div>
                    <div>
                        <img src={trumpPhoto} alt="" />
                        <p>OFFICIAL TRUMP</p>

                    </div>

                    <p>TRUMP</p>
                    <p>$12.51 <span>-1.69%</span></p>
                    <p>$12,489,992,520</p>

                </div>
            </div>
        </div>
    )
}