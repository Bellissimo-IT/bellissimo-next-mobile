import Button from "../../atoms/button/button";
import Image from 'next/image'
import styled from "styled-components";

const StyledSouceBlock = styled.div`
    display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`

const ImgNName = styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
`

const H4 = styled.h4`
     font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 17px;
  display: flex;
  align-items: center;
  margin-left: 13px;
  margin-bottom: 0;
  color: #323232;
`

const P = styled.p`
    font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #29343A;
  margin-right: 8px;
`

function SouceBlock(props) {
    return(
        <StyledSouceBlock>
            <ImgNName>
                <Image src={props.img} alt="" width="48" height="36"/>
                <H4>{props.name}</H4>
            </ImgNName>  
            <ImgNName>
                <P>{props.price}</P>
                <Button margin padding shadow children="Добавить" fs="14px" />
            </ImgNName>
        </StyledSouceBlock>
    )
}

function SouceBlockContainer() {
    return <>
        <SouceBlock name="Heinz барбекю" price="3 000 сум" img="https://qa.bellissimo.uz/storage/photos/606e6d0c-7731-4047-a3bb-6c6098d4c922.jpg"/>
        <SouceBlock name="Heinz барбекю" price="3 000 сум" img="https://qa.bellissimo.uz/storage/photos/606e6d0c-7731-4047-a3bb-6c6098d4c922.jpg"/>
        <SouceBlock name="Heinz барбекю" price="3 000 сум" img="https://qa.bellissimo.uz/storage/photos/606e6d0c-7731-4047-a3bb-6c6098d4c922.jpg"/>
    </>
}

export default SouceBlockContainer