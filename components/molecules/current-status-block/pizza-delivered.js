import Image from 'next/image'
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styled from 'styled-components';
import Button from '../../atoms/button/button';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
    }
  };


  const CurrentStatus = styled.div`
  width: 100%;
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
padding: 20px;
border-radius: 8px;
box-shadow: 0px 15px 15px rgb(0 0 0 / 5%);
margin-bottom: 25px;
display: flex;
`
const DeliveredBlock = styled.div`
    display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`

const PopUpContainer = styled.div`
    max-width: 550px;
  position: fixed;
  top: 50%;
  left: 15px;
  right: 15px;
  transform: translateY(-50%);
  z-index: 6;
  display: block;
  padding: 30px;
  background: white;
  border-radius: 25px;
`

const H3 = styled.h3`
    font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 25px;
  color: #000000;
`

const BtnBlock = styled.div`
    width: 100%;
`

const NotGetBg = styled.div`
    position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.1);
  display: block;
`

function PizzaDelivered() {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    
    }
    function closeModal(){
        setIsOpen(false);
    }
    return <>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
    >
            <NotGetBg onClick={closeModal}></NotGetBg>
            <PopUpContainer>
                <H3>Заказ еще не доставили?</H3>
                <span>
                    <p>Доставщик находится в радиусе 500 метров. Он будет с минуты на минуту. Ожидайте, пожалуйста. Если этого не произошло, позвоните на короткий номер <a href="tel:1174">1174</a></p>
                </span>
            <a href="tel:1174"><Button margin="25px 0 0 0">Позвонить</Button></a>
            </PopUpContainer>
        </Modal>
        <CurrentStatus>
            <DeliveredBlock>
                <div>
                    <h3>Доставлен</h3>
                    <p>Ваш заказ доставлен.</p>
                </div>
                <Image width="50" height="50" src="/imgs/pizza-deliver.svg" alt="" />
            </DeliveredBlock>
            <BtnBlock>
                <Button margin="0 0 15px 0" type={"white"} shadow className="didnt-get-order" onClick={openModal}>Заказ не получен?</Button>
                <a href="/order-history"><Button margin shadow>Мои заказы</Button></a>
            </BtnBlock>
        </CurrentStatus>
    </>
}

export default PizzaDelivered