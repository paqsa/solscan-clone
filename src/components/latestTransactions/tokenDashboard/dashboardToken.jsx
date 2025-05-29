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

                <div className="tokenInfoStyle" style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', width: '223px'}}>
                        <img className="imageDashboardToken" src={trumpPhoto} alt="" />
                        <p>OFFICIAL TRUMP</p>

                    </div>
                    <p style={{width: '120px'}}>TRUMP</p>
                    <p style={{width: '178px'}}>$12.51 <span>-1.69%</span></p>
                    <p>$12,489,992,520</p>
                </div>

                <div className="tokenInfoStyle" style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', width: '223px'}}>
                        <img className="imageDashboardToken" src={trumpPhoto} alt="" />
                        <p>USDC</p>

                    </div>
                    <p style={{width: '120px'}}>TRUMP</p>
                    <p style={{width: '178px'}}>$12.51 <span>-1.69%</span></p>
                    <p>$12,489,992,520</p>
                </div>

                <div className="tokenInfoStyle" style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', width: '223px'}}>
                        <img className="imageDashboardToken" src={trumpPhoto} alt="" />
                        <p>Jupiter</p>

                    </div>
                    <p style={{width: '120px'}}>TRUMP</p>
                    <p style={{width: '178px'}}>$12.51 <span>-1.69%</span></p>
                    <p>$12,489,992,520</p>
                </div>

                <div className="tokenInfoStyle" style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', width: '223px'}}>
                        <img className="imageDashboardToken" src={trumpPhoto} alt="" />
                        <p>Wrapped Sol</p>

                    </div>
                    <p style={{width: '120px'}}>TRUMP</p>
                    <p style={{width: '178px'}}>$12.51 <span>-1.69%</span></p>
                    <p>$12,489,992,520</p>
                </div>

                <div className="tokenInfoStyle" style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', width: '223px'}}>
                        <img className="imageDashboardToken" src={trumpPhoto} alt="" />
                        <p>USDT</p>

                    </div>
                    <p style={{width: '120px'}}>TRUMP</p>
                    <p style={{width: '178px'}}>$12.51 <span>-1.69%</span></p>
                    <p>$12,489,992,520</p>
                </div>
            </div>
        </div>
    )
}