import Image from 'next/image'
import styled from 'styled-components'

const P = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    margin-top: 10px;
    color: #808080;
`

const OnRoadBlock = styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`

const OnRoadCon = styled.div`
    width: 100%;
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
padding: 20px;
border-radius: 8px;
box-shadow: 0px 15px 15px rgb(0 0 0 / 5%);
margin-bottom: 15px;
display: flex;
`

const A = styled.a`
    font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
  /* identical to box height, or 18px */
  color: #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`


const OnRoad = ({name, carNumber, time}) => {
    return (
        <OnRoadCon>
            <OnRoadBlock><h3>В пути</h3><p>{name}</p></OnRoadBlock>
            <OnRoadBlock><A href="tel:1174"><img src="/imgs/phone.svg" alt="" />1174</A><h5><img src="/imgs/car.svg" alt="" />{carNumber}</h5></OnRoadBlock>
            <P>Приблизительное время прибытия {time} </P>
        </OnRoadCon>
    )
}

export default OnRoad