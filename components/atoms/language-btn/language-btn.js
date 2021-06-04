import React from "react"

import i18n from "i18next";

import { useTranslation, initReactI18next } from "react-i18next";
import styled from "styled-components";


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

const LanguageContainer = styled.div`
  width: 100%;
  height: 35px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 25px;
  padding: 2px;
  margin: 15px 0;
`

const LanguageBlock = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  transition: all 0.3s ease;
  background: ${props => props.active?"white":"transparent"};
  color: ${props => props.active?"#323232":"white"};
`

function LanguageBtn() {
    
    // const [ active, setActive ] = React.useState(i18n.language);

    const { t } = useTranslation();
    return(
        <LanguageContainer className="language-container">
          <LanguageBlock className={`language`} active={i18n.language==="uz"} id="uz" onClick={() => i18n.changeLanguage('uz')}>uz</LanguageBlock>
          <LanguageBlock className={`language`} active={i18n.language==="ru"} id="ru" onClick={() => i18n.changeLanguage('ru')}>ru</LanguageBlock>
        </LanguageContainer>
    )
}

export default LanguageBtn