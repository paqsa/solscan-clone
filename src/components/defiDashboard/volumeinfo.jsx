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

                    <p className="volume24H">$3,161,730,000 <span>( 9.84 % )</span></p>

                    <p>7,594,089 <span>( 32.76% )</span></p>
                </div>

                <div className="volumeInformationSection padding-volume">
                    <div className="volumeInformationSection AMM-width">
                        <img className="volumePhoto" src={RaydiumPhoto} alt="" />
                        <p>Raydium</p>
                    </div>

                    <p className="volume24H">$892,947,700 <span>( 32.18 % )</span></p>

                    <p>9,168,210 <span>( 32.76% )</span></p>
                </div>

                <div className="volumeInformationSection padding-volume">
                    <div className="volumeInformationSection AMM-width">
                        <img className="volumePhoto" src={OrcaPhoto} alt="" />
                        <p>Orcca</p>
                    </div>

                    <p className="volume24H">$436,922,620 <span>( 25.96 % )</span></p>

                    <p>876,188 <span>( 32.76% )</span></p>
                </div>

                <div className="volumeInformationSection padding-volume">
                    <div className="volumeInformationSection AMM-width">
                        <img className="volumePhoto" src={MeteoraPhoto} alt="" />
                        <p>Meteora</p>
                    </div>

                    <p className="volume24H">$400,608,200 <span>( 20.73 % )</span></p>

                    <p>1,777,934 <span>( 32.76% )</span></p>
                </div>
            </div>
        </div>
    )
}