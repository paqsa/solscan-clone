import SolSupply from "../startContents/solSupply";
import SolNetwork from "../startContents/network";
import SolEpoch from "../startContents/currentEpoch";
import SolStake from "../startContents/stake"
import SolanaLatest from "../../latestTransactions/transactionsLatest"
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

        <SolanaLatest></SolanaLatest>
        </>
    )
}