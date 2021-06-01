import React from "react"

import i18n from "i18next";

import { useTranslation, initReactI18next } from "react-i18next";


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

function LanguageBtn() {
    
    // const [ active, setActive ] = React.useState(i18n.language);

    const { t } = useTranslation();
    return(
        <div className="language-container">
        <div className={`language ${i18n.language==="uz"?"active":""}`} id="uz" onClick={() => i18n.changeLanguage('uz')}>uz</div>
        <div className={`language ${i18n.language==="ru"?"active":""}`} id="ru" onClick={() => i18n.changeLanguage('ru')}>ru</div>
    </div>
    )
}

export default LanguageBtn