import styled from "styled-components";
import Button from "../components/atoms/button/button";
import Header from "../components/header";
import CartImgText from "../components/molecules/cart-img-text/cart-img-text";
import RecomendBlockContainer from "../components/molecules/recomend-block/recomend-block";
import RecomendBlock from "../components/molecules/recomend-block/recomend-block";
import SouceBlockContainer from "../components/molecules/souce-block/souce-block";
import SumOrderCon from "../components/molecules/sum/sum";

const recomendBlockData = [
    {
        name: "FANTA 0.5Л", 
        price: "6 000 сум",
        img: "https://qa.bellissimo.uz/storage/photos/68becb55-af08-4690-b56c-4b148a81210f.jpg"
    },
    {
        name: "САЛАТ «ГРЕЧЕСКИЙ»", 
        price: "15 000 сум",
        img: "https://qa.bellissimo.uz/storage/photos/c9683d57-8d30-44fa-ad1e-2e1b53091fb0.jpg"
    },
    {
        name: "СИННАМОН РОЛЛЫ 8 ШТ.", 
        price: "10 000 сум",
        img: "https://qa.bellissimo.uz/storage/photos/3a9e1b1a-9327-4c6c-959f-a2981565baaa.jpg"
    },
    {
        name: "HEINZ БАРБЕКЮ", 
        price: "3 000 сум",
        img: "https://qa.bellissimo.uz/storage/photos/606e6d0c-7731-4047-a3bb-6c6098d4c922.jpg"
    }
]

const ProductsContainer = styled.div`
    display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 0;
  position: relative;
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 20px;
`

const ProductsContainerFirst = styled(ProductsContainer)`
    display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 15px 15px 0;
  position: relative;
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 20px;
`

const ProductsContainerLast = styled(ProductsContainer)`
    display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 15px 0 15px;
  position: relative;
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 20px;
`

const ProductsContainerText = styled.h2`
    position: sticky;
  left: 0;
  top: 15px;
  margin-bottom: 1em;
  font-weight: 500;
`

const SumContainer = styled.div`
    padding: 25px 20px;
  background: #FFFFFF;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 100px;
`

const MainWrapper = styled.div`
    padding: 15px;
`

const SouceRecomendationBlock = styled.div`
    width: 100%;
`

const RecomendBlockMain = styled(ProductsContainer)`
    flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  position: relative;
  padding: 0 15px 15px 15px !important;
`

const RecomendationContainer = styled.div`
    padding: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow-y: scroll;
`

const FixedOrderBtn = styled.div`
    position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px -9px 27px 8px rgba(0,0,0,0.05)  ;
  backdrop-filter: blur(3px);
  border-radius: 15px 15px 0 0;
  padding: 15px;
`

function Cart() {
    return<>
        <Header headerTitle="Корзина" />
        <MainWrapper>
        <ProductsContainerFirst>
            <CartImgText />
        </ProductsContainerFirst>
        <RecomendBlockMain>
            <ProductsContainerText>Рекомендуем</ProductsContainerText>
            <RecomendationContainer>
                {recomendBlockData.map(item => <RecomendBlockContainer name={item.name}  img={item.img} price={item.price} />)}
            </RecomendationContainer>
        </RecomendBlockMain>
        <ProductsContainerLast>
            <ProductsContainerText>Добавьте соус</ProductsContainerText>
            <SouceRecomendationBlock>
                <SouceBlockContainer />
            </SouceRecomendationBlock>
        </ProductsContainerLast>
        <SumContainer>
            <SumOrderCon />
        </SumContainer>
        <FixedOrderBtn>
            <a href="last-details"><Button margin primary children="Оформить" /></a>
        </FixedOrderBtn>
        </MainWrapper>
    </>
}

export default Cart