import { useState } from "react";
import Button from "../components/atoms/button/button";
import CheckFiles from "../components/atoms/check-files/check-files";
import Radio from "../components/atoms/radio-btn/radio-btn";
import Header from "../components/header";
import CartImgText from "../components/molecules/cart-img-text/cart-img-text";
import InputPayment from "../components/molecules/input-block-payment/input-block-payment";

function CheckDetails() {
    const [selected, setSelected] = useState('active');

    const checkFilesData = [
        {name: "Ahmadjonov Ikromjon", placeholder: "Имя:"},
        {name: "998999940010", placeholder: "Телефон:"},
        {name: "улица Тинчлик, 76", placeholder: "Адрес:"}
    ]
    return<>
        <Header headerTitle="Ваш заказ" />
        <div className="main-wrapper">
            <div className="main-blocks ur-order-block">
            <h3>Ваш заказ</h3>
            <div className="products-container your-cart">
            <CartImgText />
            </div>
            </div>
            <div className="main-blocks">
            <h3>Проверьте данные</h3>
            <div class="check-info">
                <CheckFiles data={checkFilesData} />
            </div>
        </div>
        <div className="main-blocks">
        <h3>Коментарий к заказу</h3>
            <input type="text" name="comment" id="" placeholder="Не объязательно" />
        </div>
        <div className="main-blocks">
            <div>
                <p>Ваш заказ</p>
                <p>186 000 сум</p>
            </div>
            <div>
                <p>Скидка по коду</p>
                <p>0 сум</p>
            </div>
            <div>
                <h5>К оплате</h5>
                <h5>186 000 сум</h5>
            </div>
        </div>
        <div className="order-format-container main-blocks">
            <h3>Форма оплаты</h3>
            <div className={`input-block type-payment`}>
                <div className="input-block type-payment active">
                    <h5>Наличными</h5>
                    <div class="block blocks-main">
                        <div><img src="" alt=""/><p>Без здачи</p></div>
                        <div><img src="" alt=""/><p>Сдача с 190000</p></div>
                        <div><img src="" alt=""/><p>Сдача с 200000</p></div>
                    </div>
                </div>
            </div>
            <div className="input-block type-payment">
                <div className="input-block type-payment">
                    <h5>Payme</h5>
                </div>
            </div>
            <div className="input-block type-payment">
                <div className="input-block type-payment">
                    <h5>Терминал</h5>
                    <div class="blocks blocks-main">
                        <div class="block">
                            <h5>UZCARD</h5>
                        </div>
                        <div class="block">
                            <h5>HUMO</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="fixed-order-btn">
        <Button children="Оформить (Наличными)" />
        </div>
        </div>
    </>
}

export default CheckDetails