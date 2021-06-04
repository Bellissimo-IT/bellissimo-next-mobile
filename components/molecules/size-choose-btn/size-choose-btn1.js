import styled from "styled-components"

// import { useState } from "react"
const ChooseBtn = styled.div`
    display: flex !important;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  border-radius: 100px;
  padding: 0 3px;
  background: linear-gradient(180deg, #F8F8F8 0%, #F5F5F5 100%) !important;
`

const ChooseBtnBlock = styled.div`
    width: 100%;
  color: ${props => props.active ? "#323232" : "#c8c8c8"};
  background: ${props => props.active ? "white" : "trasnapernt"};
  font-weight: ${props => props.active ? "bold" : ""};
  box-shadow: ${props => props.active ? "0px 3px 3px 0px rgb(0 0 0 / 5%)" : ""};
  height: calc(100% - 6px);
  padding: 7px 0;
  border-radius: 100px;
`

const P = styled.p`
    text-align: center;
  font-size: 16px;
`

const SizeChooseBtn1 = ({data, selected2, setSelected2}) => {
    // const [selected, setSelected] = useState(data[0])
    return <>
        <ChooseBtn>
            {data.map(item => <ChooseBtnBlock className={`block ${item.id===selected2?'active':''}`} active={item.id===selected2} onClick={() => setSelected2(item.id)}>
                <P>{item.name}</P>
            </ChooseBtnBlock>
            )}
        </ChooseBtn>
    </>
}

export default SizeChooseBtn1
