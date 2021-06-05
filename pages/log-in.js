import styled from "styled-components";
import Button from "../components/atoms/button/button";
import InputNumber from "../components/atoms/input-number/input-number";
import Header from "../components/header";
import LogInForm from "../components/molecules/log-in-form/log-in-form";

const FormBlock = styled.div`
    width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  font-family: "Jost", sans-serif;
`

function LogIn() {
    return<>
        <Header headerTitle="Войти" />
        <FormBlock>
            <LogInForm />
        </FormBlock>
    </>
}

export default LogIn