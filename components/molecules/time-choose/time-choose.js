import check from '../../../public/imgs/button.svg'
import unchecked from '../../../public/imgs/rec.svg'
import Image from 'next/image'
import { useState } from "react"

function TimeChoose() {
    const [selected, setSelected] = useState()
    return(
        <div className="order-time-container">
            <h2>Способ доставки</h2>
            <div className={`radio-choose ${item===selected?'active':''} ${item.classNameAdd}`}  onClick={() => setSelected(item)}>
            <Image className={`radio-btn-img`} src={item===selected?check:unchecked} width="16" height="16" />
                <div className="input-text address-text">
                <h2>{item.name}</h2> <p>{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default TimeChoose