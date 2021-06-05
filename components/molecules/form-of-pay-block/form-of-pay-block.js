import styled from "styled-components"

const InputBlock = styled.div`
    width: 100%;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  padding: 15px 3px 3px 3px;
  background: ${props => props.active ? "green" : "white"};
  transition: background .3s ease;
`

const PayType = ({description, selected, setSelected}) => {
    return<>
        <InputBlock active={selected}>
                    <div className="input-block type-payment active">
                        <h5>{description}</h5>
                        <div active={selected} class="block blocks-main">
                            <div><img src="" alt=""/><p>Без здачи</p></div>
                            <div><img src="" alt=""/><p>Сдача с 190000</p></div>
                            <div><img src="" alt=""/><p>Сдача с 200000</p></div>
                        </div>
                    </div>
                </InputBlock>
    </>
}

export default PayType