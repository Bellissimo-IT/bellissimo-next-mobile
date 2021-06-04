import ReactInputMask from "react-input-mask";
import styled from "styled-components";
import Button from "../../atoms/button/button";
import InputNumber from "../../atoms/input-number/input-number";


const FormBlock = styled.div`
    display: block;
  padding: 25px;
`

const H2 = styled.h2`
    text-align: center;
  margin-bottom: 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: #353535;
`

function LogInForm() {
    return<>
        <FormBlock className="form">
            <H2>Войти</H2>
            <ReactInputMask mask="+\9\9\8 (99) 999-99-99" autoFocus />
            <Button children="Отправить код" type="submit" className="submit-btn" />
        </FormBlock>
    </>
}

export default LogInForm