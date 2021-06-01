import Button from "../components/atoms/button/button";
import Radio from "../components/atoms/radio-btn/radio-btn";
import Header from "../components/header";
import RadioList from "../components/molecules/radio-list/radio-list";
import SizeChooseBtn from "../components/molecules/size-choose-btn/size-choose-btn";
import { useState } from "react"
import AddressRadio from "../components/atoms/radio-btn/address-radio";
import TimeList from "../components/atoms/time-list/time-list";
import SizeChooseBtn1 from "../components/molecules/size-choose-btn/size-choose-btn1";
// import LastDetail from "../components/last-field/last-field";

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
    <div className="main-wrapper">
        <div className="type-choose order-address">
            <div className="order-address-container no-shadow">
                <SizeChooseBtn1 data={typeDelivery} selected2={selected2} setSelected2={setSelected2} />
            </div>
        </div>
        {selected2===typeDelivery[1].id?
    <div className="filial">
        <div className="type-choose order-address">
            <div className="order-address-container no-shadow">
            <h2>Филиалы</h2>
            <AddressRadio className="bla" data={filialData} selected1={selected1} setSelected1={setSelected1}  />
            </div>
        </div> 
        <div className="order-time-container" >
            <h2>Время приготовления</h2>
        <Radio data={data} selected={selected} setSelected={setSelected} />
        {selected===data[1].id?
        <div className="time-choose-container">
            <TimeList data={TimeListData} />
        </div>:''}
        </div>
        <div className="fixed-order-btn">
        <Button children="Далее" />
        </div>
    </div>
    :
    <div>
        <div className="type-choose order-address">
            <div className="order-address-container no-shadow">
            <h2>Адреса</h2>
            <AddressRadio data={addressData} selected1={selected1} setSelected1={setSelected1}  />
            <Button className="new-order" children="Новый адрес" />
            </div>
        </div> 
        <div className="order-time-container" >
            <h2>Способ доставки</h2>
        <Radio data={data} selected={selected} setSelected={setSelected} />
        {selected===data[1].id?
        <div className="time-choose-container">
            <TimeList data={TimeListData} />
        </div>:''}
        </div>
        <div className="fixed-order-btn">
        <Button children="Далее" />
        </div>
    </div> 
    }
    </div>
    </>
}

export default Last