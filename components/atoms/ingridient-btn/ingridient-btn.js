import IngridientPlusMinus from "../ingridient-plus-minus/ingridient-plus-minus";
import React from "react"
import styled from "styled-components";
import { useState } from "react/cjs/react.development";

const IngridinentBtn = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #fafafa;
  background: ${props => props.active ? "#c0fdd1" : "#fafafa"};
  transform: ${props => props.active ? "scale(1.1)" : "scale(1)"};
  border-radius: 15px;
  padding-bottom: 15px;
  transition: all .3s ease;
  width: 100%;
  max-width: 100%;
`

const IngridientControl = styled.div`
    width: 100%;
  height: auto;
  background: transparent;
  border-radius: 15px;
  position: relative;
  padding-bottom: 30px;
`

const IngridientPlus = styled.div`
    background: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 15px;
  left: ${props => props.active ? "70%" : "15px"};
  transition: all .3s ease;
`

const Span = styled.span`
position: absolute;
display: block;
width: 15px;
height: 2px;
border-radius: 1px;
    transition: all .3s ease;
  background: ${props => props.active ? "#3a3a3a" : "rgb(0, 171, 73)"};
  transform: ${props => props.active ? "rotate(45deg)" : ""};
`

const LastSpan = styled(Span)`
  transform: ${props => props.active ? "rotate(135deg)" : "rotate(90deg)"};
`


function IngridientBtn() {
  const [active, setActive] = React.useState('');
  return(
      <IngridinentBtn className={`ingridient-btn`} active={active} onClick={function(){setActive(prevState=>{return prevState==="active"?"":"active"});}}>
        <IngridientControl className="ingridient-control">
          <IngridientPlus active={active}>
            <Span active={active}></Span>
            <LastSpan active={active}></LastSpan>
          </IngridientPlus>
        </IngridientControl>
        <p>Lorem ipsum</p>
      </IngridinentBtn>
  )
}


export default IngridientBtn