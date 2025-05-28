import "./cardContent.css"

export default function solStake() {
    return(
        <div className="cardContentBackground">
            <div className="ContentContainer">
                <p>Total Stake (SOL)</p>
                <p>395,899,404.96</p>

                <div className="contentInfo">
                    <div>
                    <p>Current Stake</p>
                    <p>395,691,894.2677 SOL (99.9%)</p>
                    <hr />
                    <p>Delinquent Stake</p>
                    <p>207,510.6943 SOL (0.1%)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}