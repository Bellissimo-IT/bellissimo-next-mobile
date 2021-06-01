import IngridientPlusMinus from "../ingridient-plus-minus/ingridient-plus-minus";
import React from "react"

function IngridientBtn() {
    const [active, setActive] = React.useState('');
    return(
        <div className={`ingridient-btn ${active}`} onClick={function(){setActive(prevState=>{return prevState==="active"?"":"active"});}}>
            <div className="ingridient-control">
            <div className="ingridient-plus">
                <span></span>
                <span></span>
            </div>
        </div>
            <p>Lorem ipsum</p>
        </div>
    )
}

export default IngridientBtn