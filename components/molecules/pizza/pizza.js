import Image from 'next/image'
import styled from 'styled-components'

const PizzaList = styled.div`
    width: 100%;
  display: grid;
  grid-template-columns: 140px 1fr;
  grid-column-gap: 10px;
  align-items: center;
  border-top: solid 1px #e5e5e5;
  border-bottom: solid 1px #e5e5e5;
  padding: 10px 10px 10px 0;
`

const LastPizzaList = styled(PizzaList)`
    margin-bottom: 100px;
`

const P = styled.p`
    text-align: left;
  font-size: 14px;
  margin: 8px 0;
`

const H3 = styled.h3`
    text-align: left;
  font-size: 18px;
`

const Img = styled(Image)`
    height: 120px !important;
    min-height: 120px !important;
`

function Pizza(props) {
    return (
            <PizzaList className="pizza-list">
                <Img src={props.img} alt={props.name} width="160" height="120" blurRadius="10" />
                <div>
                    <H3>{props.name}</H3>
                    <P>{props.description}</P>
                    <H3>{props.price}</H3>
                </div>
            </PizzaList>
    )
}

export default Pizza