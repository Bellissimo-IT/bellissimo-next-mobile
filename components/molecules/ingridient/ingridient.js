import styled from "styled-components";
import IngridientBtn from "../../atoms/ingridient-btn/ingridient-btn";

const MainBlock = styled.div`
    width: 100%;
  border-radius: 10px;
  height: 355px;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(2, 47%);
  align-items: center;
  grid-gap: 6%;
`

function Ingridient() {
    return<>
        <MainBlock>
            <IngridientBtn />
            <IngridientBtn />
            <IngridientBtn />
            <IngridientBtn />
            <IngridientBtn />
            <IngridientBtn />
        </MainBlock>
        
    </>
}

export default Ingridient