import CartPizzaAmountBtn from "../../atoms/cart-pizza-amount/cart-pizza-amount-btn";
import Image from 'next/image'
import styled from "styled-components";

const ProductBlock = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 15px;
`
const Photo = styled(Image)`
    margin-right: 20px;
`

const H3 = styled.h3`
    font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #000;
  margin-bottom: 5px;
`

const P = styled.p`
    font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 17px;
  color: #787878;
  margin-bottom: 10px;
`

const TextPrice = styled.div`
  width: 100%;
  margin-left: 10px;
`

function CartImgText() {
    return<>
     <ProductBlock className="product-block">
        <Photo src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fqa.bellissimo.uz%2Fstorage%2Fphotos%2F23138748-1bff-4994-b42b-cf7044ed4e0d.jpg&w=750&q=75" alt="" width="160" height="120" />
        <TextPrice className="text-price">
          <div class="text-block">
            <H3>АЛЬФРЕДО БОЛЬШАЯ</H3>
            <P>Воздушное</P>
          </div>
        <CartPizzaAmountBtn />
        </TextPrice>
     </ProductBlock>
    </>
}

export default CartImgText