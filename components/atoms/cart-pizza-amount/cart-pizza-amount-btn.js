import styled from "styled-components"

const PricePlusBtn = styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const CountBlock = styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  background: #e8fff0;
  border-radius: 100px;
`

const Round = styled.div`
    position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #D9FAE5;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Span = styled.span`
    display: block;
  width: 13px;
  height: 3px;
  background: #00AB49;
  border-radius: 1.5px;
`

const RotatedSpan = styled(Span)`
    position: absolute;
  transform: rotateZ(90deg);
  height: 3px;
`

const P = styled.p`
  margin: 0 7px;
`

const H4 = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #29343A;
`

function CartPizzaAmountBtn() {
    return(
        <PricePlusBtn>
            <H4>62 000 сум</H4>
            <CountBlock>
                <Round>
                    <Span></Span>
                </Round>
                <P>1</P>
                <Round>
                    <Span></Span>
                    <RotatedSpan></RotatedSpan>
                </Round>
            </CountBlock>
        </PricePlusBtn>
    )
}

export default CartPizzaAmountBtn