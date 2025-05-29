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

                <div className="volumeInformationSection padding-volume">
                    <div className="volumeInformationSection AMM-width">
                        <img className="volumePhoto" src={PumpfunPhoto} alt="" />
                        <p>PumpFun</p>
                    </div>

                    <p className="volume24H">$3,905,467,600 <span>( 67.64 % )</span></p>

                    <p>18,033,251 <span>( 32.76% )</span></p>
                </div>

                <div className="volumeInformationSection padding-volume">
                    <div className="volumeInformationSection AMM-width">
                        <img className="volumePhoto" src={JupiterPhoto} alt="" />
                        <p>Jupiter</p>
                    </div>

                    <p className="volume24H">$3,905,467,600 <span>( 67.64 % )</span></p>

                    <p>18,033,251 <span>( 32.76% )</span></p>
                </div>

                <div className="volumeInformationSection padding-volume">
                    <div className="volumeInformationSection AMM-width">
                        <img className="volumePhoto" src={RaydiumPhoto} alt="" />
                        <p>Raydium</p>
                    </div>

                    <p className="volume24H">$3,905,467,600 <span>( 67.64 % )</span></p>

                    <p>18,033,251 <span>( 32.76% )</span></p>
                </div>

                <div className="volumeInformationSection padding-volume">
                    <div className="volumeInformationSection AMM-width">
                        <img className="volumePhoto" src={OrcaPhoto} alt="" />
                        <p>Orcca</p>
                    </div>

                    <p className="volume24H">$3,905,467,600 <span>( 67.64 % )</span></p>

                    <p>18,033,251 <span>( 32.76% )</span></p>
                </div>

                <div className="volumeInformationSection padding-volume">
                    <div className="volumeInformationSection AMM-width">
                        <img className="volumePhoto" src={MeteoraPhoto} alt="" />
                        <p>Meteora</p>
                    </div>

                    <p className="volume24H">$3,905,467,600 <span>( 67.64 % )</span></p>

                    <p>18,033,251 <span>( 32.76% )</span></p>
                </div>
            </div>
        </div>
    )
}