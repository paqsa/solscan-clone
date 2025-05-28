import "./cardContent.css"

export default function solSupply() {
    return(
        <div className="cardContentBackground">
            <div className="ContentContainer">
                <p>SOL Supply</p>
                <p>601,827,787.76</p>

                <div className="contentInfo">
                    <div>
                    <p>Circulating Supply</p>
                    <p>520,526,838.6038 SOL (86.5%)</p>
                    <hr />
                    <p>Non-circulating Supply</p>
                    <p>81,301,705.2347 SOL (13.5%)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}