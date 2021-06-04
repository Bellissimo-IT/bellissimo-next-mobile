import SizeChooseBtn from "../molecules/size-choose-btn/size-choose-btn"
import Ingridient from "../molecules/ingridient/ingridient"
import Button from "../atoms/button/button"
import styled from "styled-components";

const MainContainer = styled.div`
max-width: 430px;
  min-width: 310px;
  margin: 0 auto;
  text-align: center;
  position: absolute;
  top: 53px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`

const PuzzaCunstructBlock = styled.div`
      height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0px 15px 30px #e5e5e5;
  border-radius: 25px 25px 0 0;
  text-align: left;
`

const TypeChooseBlock = styled.div`
    padding: 0 15px;
`

const H5 = styled.h5`
    font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */
  text-align: left;
  color: #323232;
  margin-bottom: 20px;
  margin-top: 30px;
`

const H2 = styled.h2`
  margin: 15px 0 0 0;
`

const P = styled.p`
  color: #c8c8c8;
`

function TypeChoose() {
    return(
        <MainContainer>
            <PuzzaCunstructBlock>
                <img className="construct-img" src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fqa.bellissimo.uz%2Fstorage%2Fphotos%2F3d8d6a24-5595-4116-a19a-997ad6b27a60.jpg&w=750&q=75" />
                <TypeChooseBlock>
                    <H2>Конструктор</H2>
                    <P>Собери свою пиццу</P>
                    <H5>Выберите размер теста</H5>
                    <SizeChooseBtn data={["Маленкая", "Средняя", "Большая"]} />
                    <H5>Выберите тип теста</H5>
                    <SizeChooseBtn data={["Воздушное", "Тонкое", "Хот-дог борт"]}/>
                    <H5>Выберите ингридиенты</H5>
                    <Ingridient />
                    <Button primary children="В корзину"/>
                </TypeChooseBlock>
            </PuzzaCunstructBlock>
        </MainContainer>
    )
}

export default TypeChoose