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
  z-index: 2;
  width: 261px;
  position: absolute;
  left: -100%;
  top: 0;
  background: #000;
  background: #29343A;
  height: 100%;
  padding: 20px;
  transition: all 0.3s ease;
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
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`

const NavBlockPhoto = styled(Image)`
  margin-right: 15px;
`

const LocationList = styled.div`
  padding-left: 40px;
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
`

const CurrentLocationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`

const CurrentLocationImg = styled(Image)`
  position: absolute;
  right: 0;
  margin-left: 50px;
`

function Header({props, headerTitle}) {
    const { t } = useTranslation();

    const [active, setActive] = React.useState('');
    const [count, setCount] = useState(0);
    const [heght, setHeight] = useState('');
    

    return (
        <HeaderContainer>
            <Nav className="navbar">
                <NavItemsBlock className={`nav-items-block ${active}`} id="nav-block">
                    <LogoContainer className="logo-container">
                    <a href="/"><img src={"../imgs/logo.png"} alt="" /></a>
                        <BurgerCancel onClick={function(){setActive(''); document.querySelector('body').classList.remove('fixed');}}>
                            <BurgerCancelSpanFirst></BurgerCancelSpanFirst>
                            <BurgerCancelSpanSecond></BurgerCancelSpanSecond>
                        </BurgerCancel>
                    </LogoContainer>
                    <NavBlocksMain className="nav-blocks location-block">
                        <CurrentLocationContainer className="current-location-container" id="location-list-activator" onClick={function(){document.getElementById('location-list').classList.toggle('active');}}>
                        <img src={"../imgs/map-pin.svg"} alt="" />
                            <p id="current-location-text">{t('tashkent')}</p>
                            <CurrentLocationImg width="10" height="10" src={"/imgs/arrow.svg"} alt="" />
                        </CurrentLocationContainer>
                        <LocationList className="location-list" id="location-list">
                            <p id="tashkent" name="tashkent" value="0">Ташкент</p>
                            <p id="andijan" name="andijan" value="1">Андижан</p>
                            <p id="samarkand" name="samarkand" value="2">Самарканд</p>
                        </LocationList>
                    </NavBlocksMain>
                    <div className="hr"></div>

                    <NavItems />

                    <LanguageBtn />
                    <a href="tel:1174" className="call-us-con">
                        <div className="call-us">
                            <img src="" alt="" />
                            <p>Позвонить нам</p>
                        </div>
                    </a>
                    <a href="" className="feedback">Есть жалоба?</a>
                </NavItemsBlock>
                <div className="burger-container" id="burger" onClick={function(){setActive('active'); document.querySelector('body').classList.add('fixed');}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p>{headerTitle}</p>
                <a href="cart">
                    <div className="basket">
                        <img src={"../../imgs/shopping-cart.svg"} alt="" />
                        <div className="cart-count">
                            <p id="cart-count">{count}</p>
                        </div>
                    </div>
                </a>
                
            </Nav>
        </HeaderContainer>
    )
}


export default Header