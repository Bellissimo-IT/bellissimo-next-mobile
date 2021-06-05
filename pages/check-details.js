import { useState } from "react";
import styled from "styled-components";
import Button from "../components/atoms/button/button";
import CheckFiles from "../components/atoms/check-files/check-files";
import Radio from "../components/atoms/radio-btn/radio-btn";
import Header from "../components/header";
import CartImgText from "../components/molecules/cart-img-text/cart-img-text";
import PayType from "../components/molecules/form-of-pay-block/form-of-pay-block";
import InputPayment from "../components/molecules/input-block-payment/input-block-payment";

const MainWrapper = styled.div`
    padding: 15px;
`

const MainBlock = styled.div`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  width: 100%;
  padding: 15px;
  margin-bottom: 25px;
  border-radius: 15px;
`

const MainBlockFirst = styled(MainBlock)`
    padding: 15px 15px 15px 0 !important;
`

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

const InnerBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0.5em 0;
`

const InnerBlockP = styled.p`
    font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #323232;
`

const InnerBlockH = styled.h5`
    font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #323232;
`

const MainBlockH3 = styled.h3`
    font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 21px;
  margin-bottom: 15px;
  color: #323232;
`

const InputBlock = styled.div`
    width: 100%;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  padding: 15px 3px 3px 3px;
`

const Input = styled.input`
    display: block;
  width: 90%;
  border: none;
  border-bottom: 1px solid #EEEEEE;
  font-style: normal;
  margin: 25px 0 0 0;
  font-weight: normal;
  font-size: 15px;
  line-height: 17px;
  color: #787878;
  transition: all 0.3s ease;
  padding: 0 0 10px 0;
`

function CheckDetails() {
    const [selected, setSelected] = useState('active');
    const [paySelected, paySetSelected] = useState('');

    const checkFilesData = [
        {name: "Ahmadjonov Ikromjon", placeholder: "Имя:"},
        {name: "998999940010", placeholder: "Телефон:"},
        {name: "улица Тинчлик, 76", placeholder: "Адрес:"}
    ]
    return<>
        <Header/>
            <MainWrapper>
                <MainBlockFirst>
                    <MainBlockH3>Ваш заказ</MainBlockH3>
                    <div>
                        <CartImgText />
                    </div>
                </MainBlockFirst>
                <MainBlock>
                    <MainBlockH3>Проверьте данные</MainBlockH3>
                    <CheckFiles data={checkFilesData} />
                </MainBlock>
                <MainBlock>
                    <MainBlockH3>Коментарий к заказу</MainBlockH3>
                    <Input type="text" autoFocus name="comment" id="" placeholder="Не объязательно" />
                </MainBlock>
                <MainBlock>
                    <InnerBlock>
                        <InnerBlockP>Ваш заказ</InnerBlockP>
                        <InnerBlockP>186 000 сум</InnerBlockP>
                    </InnerBlock>
                    <InnerBlock>
                        <InnerBlockP>Скидка по коду</InnerBlockP>
                        <InnerBlockP>0 сум</InnerBlockP>
                    </InnerBlock>
                    <InnerBlock>
                        <InnerBlockH>К оплате</InnerBlockH>
                        <InnerBlockH>186 000 сум</InnerBlockH>
                    </InnerBlock>
                </MainBlock>
            <MainBlock className="order-format-container main-blocks">
                <MainBlockH3>Форма оплаты</MainBlockH3>
                <PayType onClick={function(){paySetSelected(true)}} />
            </MainBlock>
            <FixedOrderBtn>
                <Button margin children="Оформить (Наличными)" />
            </FixedOrderBtn>
        </MainWrapper>
    </>
}

export default CheckDetails