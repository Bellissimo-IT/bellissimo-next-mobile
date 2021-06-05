// import logo from '';
// import mapPin from '../components/imgs/arrow.svg';
// import arrow from '../../imgs/arrow.svg';
// import logIn from '../../imgs/log-in.svg';
// import shoppingCart from '../../imgs/shopping-cart.svg'
// import '../public/imgs'

import Image from 'next/image'
import React, { useState } from "react"

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageBtn from './atoms/language-btn/language-btn';
import NavItems from './atoms/nav-links/nav-links';
import styled from 'styled-components';
import FloatBlockContainer from './atoms/float-block/float-block';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      uz: {
        translation: {
          "tashkent": "Toshkent"
        }
      },
      ru: {
        translation: {
          "tashkent": "Ташкент"
        }
      }
    },
    lng: "uz",
    fallbackLng: "uz",

    interpolation: {
      escapeValue: false
    }
  });

const HeaderContainer = styled.header`
  width: 100%;
`
const Nav = styled.nav`
  padding: 15px 10px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: red;
`

const NavItemsBlock = styled.div`
  overflow: scroll;
  z-index: 200;
  width: 261px;
  position: absolute;
  left: ${props => props.active ? "0" : "-100%"};
  top: 0;
  background: rgba(41, 52, 58, .7);
  height: 100%;
  padding: 20px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
`

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`

const BurgerCancel = styled.div`
  position: relative;
  top: 15px;
  right: -40px;
`

const BurgerCancelSpan = styled.span`
  position: absolute;
  width: 20px;
  height: 2px;
  display: block;
  margin-bottom: 3px;
  background: white;
  border-radius: 100px;
  transform: translateX(0);
`

const BurgerCancelSpanFirst = styled(BurgerCancelSpan)`
  transform: rotateZ(45deg);
`

const BurgerCancelSpanSecond = styled(BurgerCancelSpan)`
  transform: rotateZ(-45deg);
`

const NavBlocksMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 17px;
`

const NavBlocksMainP = styled.p`
  padding: 5px 1em;
  font-family: "Jost", sans-serif;
`

const NavBlockPhoto = styled(Image)`
  margin-right: 15px;
`

const LocationList = styled.div`
  padding-left: 40px;
  width: 100%;
  height: ${props => props.locationActive ? "max-content" : "0"};
  overflow: hidden;
  transition: height 0.3s ease;
`

const CurrentLocationContainer = styled.div`
  width: 66%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: .5em 0;
`

const CurrentLocationImg = styled(Image)`
  position: absolute;
  right: 0;
  margin-left: 50px;
`

const CallUsSoon = styled.a`
  display: block;
  padding: 7px 0;
  color: #aaaaaa;
  border: solid 1px #aaa;
  border-radius: 25px;
  width: 100%;
  font-family: "Jost", sans-serif;
`

const CallUs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const FeedBack = styled.a`
  display: block;
  margin-top: 15px;
  font-family: "Jost", sans-serif;
  color: #aaaaaa;
`

const BurgerContainerSpan = styled.span`
  width: 20px;
  height: 2px;
  display: block;
  font-family: "Jost", sans-serif;
  margin-bottom: 3px;
  background: white;
  border-radius: 100px;
`

const BurgerContainerSpanLast = styled.span`
  margin: 0;
  font-family: "Jost", sans-serif;
`

const CartCount = styled.div`
  z-index: 1;
  top: -10px;
  right: -10px;
  position: absolute;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #00AB49;
`

const Basket = styled.div`
  position: relative;
`

const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.15);
`


const FloatBlock = styled.div`
  position: fixed;
  left: 15px;
  bottom: 70px;
  right: 90px;
  padding: 15px ;
  border-radius: 15px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .2);
  background: linear-gradient(90deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0.5) 100%);
  z-index: 199;
  backdrop-filter: blur(6px);
  display: ${props => props.floatActive ? "block" : "none"} ;
`

const P = styled.p`
font-weight: 400;
  text-align: center;
`

function Header({props, headerTitle}) {
    const { t } = useTranslation();

    const [active, setActive] = React.useState('');
    const [count, setCount] = useState(0);
    const [heght, setHeight] = useState('');
    const [selected, setSelected] = useState('');
    const [locationSelceted, LocationSetSelected] = useState();
    

    return (
        <HeaderContainer>
            <Nav>
                <NavItemsBlock className={`${active}`} active={selected} id="nav-block">
                    <LogoContainer>
                    <a href="/"><Image width="170" height="45" src={"/imgs/logo.png"} alt="" /></a>
                        <BurgerCancel onClick={function(){setSelected(); document.querySelector('body').style.overflow="inherit"}}>
                            <BurgerCancelSpanFirst></BurgerCancelSpanFirst>
                            <BurgerCancelSpanSecond></BurgerCancelSpanSecond>
                        </BurgerCancel>
                    </LogoContainer>
                    <NavBlocksMain>
                        <CurrentLocationContainer className="current-location-container" onClick={function(){LocationSetSelected(!locationSelceted)}}>
                        <img src={"../imgs/map-pin.svg"} alt="" />
                            <NavBlocksMainP id="current-location-text">{t('tashkent')}</NavBlocksMainP>
                            <CurrentLocationImg width="10" height="10" src={"/imgs/arrow.svg"} alt="" />
                        </CurrentLocationContainer>
                        <LocationList locationActive={locationSelceted}>
                            <NavBlocksMainP id="tashkent" name="tashkent" value="0">Ташкент</NavBlocksMainP>
                            <NavBlocksMainP id="andijan" name="andijan" value="1">Андижан</NavBlocksMainP>
                            <NavBlocksMainP id="samarkand" name="samarkand" value="2">Самарканд</NavBlocksMainP>
                        </LocationList>
                    </NavBlocksMain>
                    <Hr></Hr>
                    <NavItems />
                    <LanguageBtn />
                    <CallUsSoon href="tel:1174">
                        <CallUs>
                            <img src="" alt="" />
                            <p>Позвонить нам</p>
                        </CallUs>
                    </CallUsSoon>
                    <FeedBack href="">Есть жалоба?</FeedBack>
                </NavItemsBlock>
                <div onClick={function(){setSelected(true); document.querySelector('body').style.overflow="hidden";}}>
                    <BurgerContainerSpan></BurgerContainerSpan>
                    <BurgerContainerSpan></BurgerContainerSpan>
                    <BurgerContainerSpanLast></BurgerContainerSpanLast>
                </div>
                <p>{headerTitle}</p>
                <a href="cart">
                    <Basket>
                        <img src={"../../imgs/shopping-cart.svg"} alt="" />
                        <CartCount>
                            <p>{count}</p>
                        </CartCount>
                    </Basket>
                </a>
            </Nav>
            <FloatBlock><P>сырный цыпленек добавлен в корзину</P></FloatBlock>
        </HeaderContainer>
    )
}


export default Header