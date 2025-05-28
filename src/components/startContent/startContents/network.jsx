import "./cardContent.css"

export default function solNetwork() {
    return(
        <div className="cardContentBackground">
            <div className="ContentContainer">
                <p>Network (Transactions)</p>
                <p>410,922,320,819</p>

                <div className="contentInfo">
                    <div>
                    <div>
                        <div>
                            <p>Block Height</p>
                            <p>321276125</p>
                        </div>

                        <div>
                            <p>Slot Height</p>
                            <p>343060748</p>
                        </div>
                    </div>

                    <hr />
                    
                    <div>
                        <div>
                            <p>TPS</p>
                            <p>4,206.11</p>
                        </div>

                        <div>
                            <p>True TPS</p>
                            <p>1,104</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}