import Button from "../components/atoms/button/button";
import Radio from "../components/atoms/radio-btn/radio-btn";
import Header from "../components/header";
import RadioList from "../components/molecules/radio-list/radio-list";
import SizeChooseBtn from "../components/molecules/size-choose-btn/size-choose-btn";
import { useState } from "react"
import AddressRadio from "../components/atoms/radio-btn/address-radio";
import TimeList from "../components/atoms/time-list/time-list";
import SizeChooseBtn1 from "../components/molecules/size-choose-btn/size-choose-btn1";
import styled from "styled-components";
// import LastDetail from "../components/last-field/last-field";

const FixedOrderBtn = styled.div`
    position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px -9px 27px 8px rgba(0,0,0,0.05)  ;
  backdrop-filter: blur(3px);
  border-radius: 15px 15px 0 0;
  padding: 15px;
`
const MainWrapper = styled.div`
    padding: 15px;
`
const FilialContainer = styled.div`
    border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  padding: 25px 20px;
  margin-bottom: 25px;
`
const LastBlock = styled(FilialContainer)`
    margin-bottom: 80px;
` 
const ChooseBtn = styled.div`
    border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  padding: 25px 20px;
  margin-bottom: 25px;
`
const Blocks = styled.div`
    padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 15px;
`
const H3 = styled.h3`
    font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 10px;
`
const H4 = styled.h4`
    font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
  /* or 21px */
  color: #000000;
`
const H2 = styled.h2`
    font-weight: 700;
    font-size: 22px;
`
const OrderTimeContainer = styled.div`
    margin-bottom: 80px;
    
`
const TimeChooseContainer = styled.div`
  height: 140px;
  overflow: scroll;
  display: grid;
  border-radius: 15px;
  grid-template-columns: repeat(2, 49%) !important;
  grid-gap: 5px;
`

function Last() {
    const data = [
        {id:0, name: "Как можно быстрее"},
        {id:1, name: "Ко времени"}
    ]
    const addressData = [
        {id:0, name: "Тинчлик", description: "76"},
        {id:1, name: "Мудофаачилар", description: "66/1"},
    ]
    const TimeListData = [
        {id:0, name: "12:00"},
        {id:1, name: "12:00"},
        {id:2, name: "12:00"},
        {id:3, name: "12:00"},
        {id:4, name: "12:00"},
        {id:5, name: "12:00"},
        {id:6, name: "12:00"},
        {id:7, name: "12:00"},
        {id:8, name: "12:00"},
        {id:9, name: "12:00"},
        {id:10, name: "12:00"},
        {id:11, name: "12:00"}
    ]
    const filialData = [
        {id:0, name: "samarqand Darvoza"},
        {id:1, name: "samarqand Darvoza"},
        {id:2, name: "samarqand Darvoza"},
        {id:3, name: "samarqand Darvoza"},
        {id:4, name: "samarqand Darvoza"},
        {id:5, name: "samarqand Darvoza"},
        {id:6, name: "samarqand Darvoza"},
        {id:7, name: "samarqand Darvoza"},
        {id:8, name: "samarqand Darvoza"},
        {id:9, name: "samarqand Darvoza"},
        {id:10, name: "samarqand Darvoza"}
    ]
    const typeDelivery = [
        {id:0, name: "Доставка"},
        {id:1, name: "Самовывоз"}
    ]
    const [selected, setSelected] = useState(data[0].id)
    const [selected1, setSelected1] = useState(addressData[0].id)
    const [selected2, setSelected2] = useState(typeDelivery[0].id)
    return<>
    <Header headerTitle="Оформить заказ" />
    <MainWrapper>
        <ChooseBtn>
            <SizeChooseBtn1 data={typeDelivery} selected2={selected2} setSelected2={setSelected2} />
        </ChooseBtn>
        {selected2===typeDelivery[1].id?
        <div>
            <FilialContainer>
                <div>
                    <H2>Филиалы</H2>
                    <AddressRadio data={filialData} selected1={selected1} setSelected1={setSelected1}  />
                </div>
            </FilialContainer> 
            <LastBlock>
                <H2>Время приготовления</H2>
                <Radio data={data} selected={selected} setSelected={setSelected} />
                {selected===data[1].id?
                <TimeChooseContainer>
                    <TimeList data={TimeListData} />
                </TimeChooseContainer>:''}
            </LastBlock>
            <FixedOrderBtn>
                <Button margin="0" children="Далее" />
            </FixedOrderBtn>
        </div>
    :
        <div>
            <FilialContainer>
                <div>
                    <H2>Адреса</H2>
                    <AddressRadio data={addressData} selected1={selected1} setSelected1={setSelected1}  />
                    <Button margin="0" children="Новый адрес" />
                </div>
            </FilialContainer> 
            <LastBlock>
                <H2>Способ доставки</H2>
                <Radio data={data} selected={selected} setSelected={setSelected} />
                {selected===data[1].id?
                <TimeChooseContainer>
                    <TimeList data={TimeListData} />
                </TimeChooseContainer>:''}
            </LastBlock>
            <FixedOrderBtn>
                <a href="check-details"><Button margin="0" children="Далее" /></a>
            </FixedOrderBtn>
        </div> 
    }
    </MainWrapper>
    </>
}

export default Last