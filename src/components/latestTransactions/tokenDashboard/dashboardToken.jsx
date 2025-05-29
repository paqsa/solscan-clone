import "./tokenDash.css";

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
            </div>
        </div>
    )
}