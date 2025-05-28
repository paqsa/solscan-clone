import "./topMarkets.css";
import solanaPhoto from "./../../assets/solanaLogo.png"

export default function topMarkets(props) {
    return(
        <div className="topMarketsContent">
            <p>#{props.topMarketsNumber}</p>
            <img className="solanaPhotoTopMarkets" src={solanaPhoto} alt="" />
            <p className="USDC-SOL">USDC-WSOL</p>
        </div>
    )
}