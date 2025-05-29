import "./defi.css";
import DefiChart from "./defiChart"
import VolumeInformation from "./volumeinfo"

export default function defiDashboard() {
    
    return (
        <div className="defiDashboardContent">
            <div className="defiDashboard">

                <div className="firstContentOfDefi">
                    <p>Defi Dashboard</p>

                    <p className="visitDashboard">Visit Dashboard</p>
                </div>

                <div className="defiChart"> 
                    <DefiChart></DefiChart>
                </div>

                <div>
                    <p>Top Defi Protocols by Volume</p>
                    <VolumeInformation></VolumeInformation>
                </div>


            </div>
            
        </div>
        
    )
}