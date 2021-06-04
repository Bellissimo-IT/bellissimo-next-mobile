import Image from 'next/image'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react/cjs/react.development'
import styled from 'styled-components'

const InputBlock = styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #e5e5e5;
`

const Input = styled.input`
    padding-bottom: 0 !important;
  border: none !important;
  width: 80%;
`

// const PhoneInputBlock = styled(PhoneInput)`
//   --PhoneInputCountryFlag-height: 10px ;
// `

function  InputNumber() {
  const [value, setValue] = useState()
    return(
        <InputBlock>
            <img src="/imgs/tel-input.svg" alt="" />
            <span>+998</span>
            <Input type="tel" name="tel" id="tel" placeholder="Телефон" maxLength="9" />
            {/* <PhoneInputBlock placeholder="Введите ваш номер телефона" value={value} onChange={setValue} /> */}
        </InputBlock>
    )
}

export default InputNumber