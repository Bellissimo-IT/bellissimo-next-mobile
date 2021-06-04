import { useState } from "react"
import styled from "styled-components"

const ChooseBlock = styled.div`
    display: grid;
  grid-template-columns: repeat(3, 33.33%);
  border-radius: 50px;
  background: linear-gradient(180deg, #F8F8F8 0%, #F5F5F5 100%);
  padding: 3px;
`

const Block = styled.div`
padding: 5px 0;
    border-radius: 50px;
    background: ${props => props.active ? "white" : "transparent"};
    box-shadow: ${props => props.active ? "0px 2px 2px rgba(0, 0, 0, .15)" : ""};
`

const P = styled.p`
    text-align: center;
    font-weight: ${props => props.active ? "600" : "400"};
    color: ${props => props.active ? "black" : "#c8c8c8"};
`

function SizeChooseBtn({data}) {
    const [selected, setSelected] = useState(data[0])
    return <>
        <ChooseBlock>
            {data.map(item => <Block active={item===selected} onClick={() => setSelected(item)}>
                <P active={item===selected}>{item}</P>
            </Block>
            )}
        </ChooseBlock>
    </>
}

export default SizeChooseBtn
