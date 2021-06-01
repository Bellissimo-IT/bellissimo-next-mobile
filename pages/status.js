import CurrentTime from "../components/atoms/current-time/current-time";
import StatusLine from "../components/atoms/status-line/status-line";
import Header from "../components/header";
import CurrentStatusBlock from "../components/molecules/current-status-block/current-status-block";
import Image from 'next/image'
import PizzaDelivered from "../components/molecules/current-status-block/pizza-delivered";
import OnRoad from "../components/molecules/current-status-block/on-road";
import styled from "styled-components";
import clock from '../public/imgs/clock.png';

const MainWrapper = styled.div`
    max-width: 550px;
    width: 100%;
    padding: 15px;
`

const TimeGuarantee = styled.div`
    width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1em auto;
`

const CurrentStatus = styled.div`
    width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 15px 15px rgb(0 0 0 / 5%);
  margin-bottom: 15px;
  display: flex;
`

const H6 = styled.h5`
    font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 120%;
  /* or 16px */
  color: #404040;
  margin-left: 1em;
`

const Guarantee = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
`

function Status() {
    const statusData = [
        {name: "Принят", description: "Заказ обрабатывается оператором", img: "/imgs/approved.svg"},
        {name: "Готовится", description: "Ваш заказ уже готовится", img: "/imgs/approved.svg"},
        {name: "Готов", description: "Ваш заказ готов и уже собирается", img: "/imgs/approved.svg"},
        {name: "Доставлен", description: "Ваш заказ доставлен", img: "/imgs/approved.svg"}
    ]
    const going = [
        {name: "Мухиддин Азимов", carNumber: "A01 | 123BC", time: "18:35"}
    ]
    
    // const [selected, setSelected] = useState['']
    return<>
        <Header headerTitle="Статус заказа"/>
        <MainWrapper>
            <TimeGuarantee>
                <CurrentTime />
                <Guarantee>
                    <Image src={clock} width="40" height='40' />
                    <H6>Доставка за 45 минут, или пицца бесплатно</H6>
                </Guarantee>
            </TimeGuarantee>
            <StatusLine />
            <CurrentStatus>
                <CurrentStatusBlock name={statusData[0].name} description={statusData[0].description} img={statusData[0].img} />
            </CurrentStatus>
            <PizzaDelivered  />
            <OnRoad name={going[0].name} carNumber={going[0].carNumber} time={going[0].time} />
        </MainWrapper>
    </>
}

export default Status