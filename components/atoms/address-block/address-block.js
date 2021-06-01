import Image from 'next/image'
import styled from 'styled-components'
import close from '../../../public/imgs/close.svg'

const AddressDiv = styled.div`
    width: 100%;
    border-radius: 15px;
    background: #eeeeee;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const AddressBlockText = styled.div`
    font-size: 16px !important;
`
const P = styled.p`
    font-size: 13px;
    min-width: 25px;
    margin-right: 1em;
    float: left;
    margin-top: .2em;
    margin-bottom: .2em;
`

const Span = styled.span`
    display: block;
    width: 200px;
`

const AddressBlock = ({mainAddress, kvOfis, podyezd, etaj, kodDveri}) => {
    return (
        <AddressDiv>
            <AddressBlockText>
                <h3>{mainAddress}</h3>
                <Span>
                    <P>Кв./Офис: {kvOfis},</P>
                    <P>Подъезд: {podyezd},</P>
                    <P>Этаж: {etaj},</P>
                    <P>Код двери: {kodDveri}</P>
                </Span>
            </AddressBlockText>
            <Image src={close} width="15" height="15" />
        </AddressDiv>
    )
}

export default AddressBlock