import SolSupply from "../startContents/solSupply";
import SolNetwork from "../startContents/network";
import SolEpoch from "../startContents/currentEpoch";
import SolStake from "../startContents/stake"
import SolanaLatest from "../../latestTransactions/transactionsLatest"
import DefiDashboard from "../../defiDashboard/defi"
import TokenDashboard from "../../latestTransactions/tokenDashboard/dashboardToken"
import TrueTPS from "./trueTps"
import AveragePingTime from "./averagePingTime"
import "./solanainfo.css"


export default function solanainfo() {

    return (
        <>
        
        <div className="solanaInformationContent">
            <SolSupply></SolSupply>
            <SolNetwork></SolNetwork>
            <SolEpoch></SolEpoch>
            <SolStake></SolStake>
        </div>

        <div className="solanaLatestClass">
            <div>
                <SolanaLatest></SolanaLatest>
                <TokenDashboard></TokenDashboard>
            </div>
            <DefiDashboard></DefiDashboard>
        </div>

        <div className="TPSInformation">
            <TrueTPS></TrueTPS>
        </div>

         <div className="TPSInformation">
            <AveragePingTime></AveragePingTime>
        </div>


        </>
    )
}