import styled from "styled-components";
import Button from "../../atoms/button/button";
import Image from 'next/image';

const RecomendationBlock = styled.div`
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  margin: 0 0.5em;
  padding: 10px 0;
  width: 134px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 240px;
  border-radius: 10px;
`

const Photo = styled(Image)`
  overflow: hidden;
`

const H3 = styled.h3`
    font-weight: 500;
  font-style: normal;
  font-size: 16px;
  margin-bottom: 5px;
  line-height: 17px;
  color: #323232;
  text-align: center;
`

const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`




function RecomendBlockContainer(props) {
    return <>
        <RecomendationBlock>
            <Photo src={props.img} width="120" height="100" />
            <TextBlock>
                <H3>{props.name}</H3>
                <p>{props.price}</p>
                <Button margin width padding primary children="Добавить" />
            </TextBlock>
        </RecomendationBlock>
    </>
}

export default RecomendBlockContainer