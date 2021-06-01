import styled from "styled-components"

const Text = styled.div`
    width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const P = styled.p`
    font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #323232;
`

function SumOrderCon(props) {
    return(
        <Text>
            <P>К оплате</P>
            <P>156 000 сум</P>
        </Text>
    )
}

export default SumOrderCon