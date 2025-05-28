import "./cardContent.css"

export default function currentEpoch() {
    return(
        <div className="cardContentBackground">
            <div className="ContentContainer">
                <p>Current Epoch</p>
                <p>794</p>

                <div className="contentInfo">
                    <div>
                    <p>Circulating Supply</p>
                    <p>520,526,838.6038 SOL (86.5%)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}