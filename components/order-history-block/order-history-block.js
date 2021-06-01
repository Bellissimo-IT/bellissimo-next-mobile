import styled from "styled-components"

const OrderHistoryBlock = styled.div`
  padding: 5px 20px;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 5%);
  margin: 15px;
  border-radius: 15px;
`

const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-top: 15px;
`

const H2 = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 37px;
  display: flex;
  align-items: center;
  color: #00AB49;
  font-family: "Jost", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`
const H3 = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 37px;
  display: flex;
  align-items: center;
  color: #00AB49;
  font-family: "Jost", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`

const P = styled.p`
  font-family: "Jost", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`

function OrderHistoryContainer() {
    return (
        <OrderHistoryBlock>
            <Block>
                <H2>#196</H2>
                <p>27.05.2021 <span> 19:49</span></p>
            </Block>
            <div>
                <Block>
                    <p>Пепперони средняя</p>
                    <p>1 шт</p>
                </Block>
            </div>
            <hr />
            <Block>
                <p>Адрес</p>
                <p>Tinchlik</p>
            </Block>
            <Block>
                <H3>closed</H3>
                <div><p>Итого:</p><h4>52 000 сум</h4></div>
            </Block>
        </OrderHistoryBlock>
    )
}

export default OrderHistoryContainer