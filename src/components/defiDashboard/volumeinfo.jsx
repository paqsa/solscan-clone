import "./volume.css"
import JupiterPhoto from "./../../assets/volume/jupiter.png";
import MeteoraPhoto from "./../../assets/volume/meteora.png";
import OrcaPhoto from "./../../assets/volume/orca.png";
import PumpfunPhoto from "./../../assets/volume/pumpfun.png";
import RaydiumPhoto from "./../../assets/volume/raydium.png";

export default function volumeInfo() {
    return(
        <div className="volumeInfo">
            <div className="volumeContent">

                <div className="volumeInfoStart">
                    <p className="AMM">AMM</p>

                    <p className="volume24H">Volume 24H</p>

                    <p>Total Txs 24H</p>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}