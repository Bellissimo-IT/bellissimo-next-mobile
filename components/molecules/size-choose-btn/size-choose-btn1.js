// import { useState } from "react"

const SizeChooseBtn1 = ({data, selected2, setSelected2}) => {
    // const [selected, setSelected] = useState(data[0])
    return <>
        <div className="choose-block">
            {data.map(item => <div className={`block ${item.id===selected2?'active':''}`} onClick={() => setSelected2(item.id)}>
                <p>{item.name}</p>
            </div>
            )}
        </div>
    </>
}

export default SizeChooseBtn1
