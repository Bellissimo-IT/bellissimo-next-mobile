import { useState } from "react"

function SizeChooseBtn({data}) {
    const [selected, setSelected] = useState(data[0])
    return <>
        <div className="choose-block">
            {data.map(item => <div className={`block ${item===selected?'active':''}`} onClick={() => setSelected(item)}>
                <p>{item}</p>
            </div>
            )}
        </div>
    </>
}

export default SizeChooseBtn
