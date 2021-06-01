import { useState } from "react"

const TimeList = ({data}) => {
    const [selected, setSelected] = useState(data[0].id)
    return<>
        {data.map(item => <div className={`time-block ${item.id===selected?'active':''}`} onClick={function(){setSelected(item.id)}}> 
                    <p>{item.name}</p>
                </div>
        )}
    </>
}

export default TimeList