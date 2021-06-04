import { useState } from "react"
import styled from "styled-components"

const TimeBlock = styled.div`
    padding: 8px 0;
  border-radius: 15px;
  border: 2px solid #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  color: #323232;
  background: ${props => props.active ? "rgb(218, 255, 229)" : ""};
`

const TimeList = ({data}) => {
    const [selected, setSelected] = useState(data[0].id)
    return<>
        {data.map(item => <TimeBlock className={`time-block ${item.id===selected?'active':''}`} active={item.id===selected} onClick={function(){setSelected(item.id)}}> 
                    <p>{item.name}</p>
                </TimeBlock>
        )}
    </>
}

export default TimeList