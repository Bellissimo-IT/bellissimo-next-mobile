import Image from 'next/image'
import styled from 'styled-components'

const InputMain = styled.input`
    border: 1px solid #eaeaea;
    padding: 5px 10px;
    margin-right: 15px;
    margin: 0.5em 0;
    transition: all .3s ease;
    border-radius: 15px;
    width: 90%;
    &:focus {
        border: 1px solid rgb(0, 171, 73);
    }
`

const InputImg = styled.div`
    margin-right: 15px;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const Input = ({type, img, placeholder, value}) => {
    return <>
    <InputContainer>
        <InputImg>
            <Image src={img} alt={placeholder} width="16" height="16" />
        </InputImg>
        <InputMain type={type} placeholder={placeholder}  value={value}/>
    </InputContainer>
    </>
}

export default Input