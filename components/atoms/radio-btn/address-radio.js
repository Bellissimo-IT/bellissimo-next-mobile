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



const AddressRadio = ({data, description, selected1, setSelected1}) => {
    return<>
        <MainContainer >
        {data.map(item => <RadioChoose active={item.id===selected1}  onClick={function(){setSelected1(item.id)}}>
            <Image  src={item.id===selected1?check:unchecked}  width="16" height="16" />
                <InputText>
                <H2>{item.name}</H2> <P>{item.description}</P>
                </InputText>
            </RadioChoose>
            )}
        </MainContainer>
        
    </>
}

export default AddressRadio
