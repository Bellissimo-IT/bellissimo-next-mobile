import CurrentTime from "../components/atoms/current-time/current-time";
import StatusLine from "../components/atoms/status-line/status-line";
import Header from "../components/header";
import CurrentStatusBlock from "../components/molecules/current-status-block/current-status-block";
import Image from 'next/image'
import PizzaDelivered from "../components/molecules/current-status-block/pizza-delivered";
import OnRoad from "../components/molecules/current-status-block/on-road";
// import { useState } from "react";

// Modal.setAppElement('#yourAppElement')

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
        <Header headerTitle="Статус заказа" />
        <div className="main-wrapper">
            <div className="time-n-guarantee-block">
                <CurrentTime />
                <div className="guarantee">
                    <h6>Доставка за 45 минут, или пицца бесплатно</h6>
                </div>
            </div>
            <StatusLine />
            <div className="current-status-block active">
                <CurrentStatusBlock name={statusData[0].name} description={statusData[0].description} img={statusData[0].img} />
            </div>
            <PizzaDelivered  />
            <OnRoad name={going[0].name} carNumber={going[0].carNumber} time={going[0].time} />
        </div>
    </>
}

export default Status