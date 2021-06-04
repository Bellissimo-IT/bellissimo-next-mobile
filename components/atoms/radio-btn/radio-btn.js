import check from '../../../public/imgs/button.svg'
import unchecked from '../../../public/imgs/rec.svg'
import Image from 'next/image'
import styled from 'styled-components'

const MainContainer = styled.div`
    padding: 15px 0;
`

const RadioChoose = styled.div`
    display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 15px;
  background: ${props => props.active ? "#C0Fdd1" : "white"};
`

const InputText = styled.div`
    margin-left: 10px;
`

const H2 = styled.h2`
    margin: 0 !important;
  font-size: 16px !important;
  font-weight: 500;
`

const P = styled.p`
    font-size: 14px;
`

const Radio = ({data, description, selected, setSelected}) => {
    return<>
        <MainContainer >
        {data.map(item => <RadioChoose active={item.id===selected}   onClick={function(){setSelected(item.id)}}>
            <Image src={item.id===selected?check:unchecked}  width="16" height="16" />
                <InputText>
                <H2>{item.name}</H2> <P>{item.description}</P>
                </InputText>
            </RadioChoose>
            )}
        </MainContainer>
        
    </>
}

export default Radio
