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
    padding: 15px 15px 15px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 20px;
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

function Cart() {
    return<>
        <Header headerTitle="Корзина" />
        <MainWrapper className="main-wrapper">
        <ProductsContainer>
            <CartImgText />
        </ProductsContainer>
        <ProductsContainer className="products-container recommendation">
            <h2 className="recomend-title">Рекомендуем</h2>
            <div className="recomendation-container">
                {recomendBlockData.map(item => <RecomendBlockContainer name={item.name}  img={item.img} price={item.price} />)}
            </div>
        </ProductsContainer>
        <ProductsContainer className="products-container souce-add">
            <h2>Добавьте соус</h2>
            <SouceRecomendationBlock>
                <SouceBlockContainer />
            </SouceRecomendationBlock>
        </ProductsContainer>
        <SumContainer className="sum-container">
            <SumOrderCon />
        </SumContainer>
        <div className="fixed-order-btn">
        <Button margin primary children="Оформить" />
        </div>
        </MainWrapper>
    </>
}

export default Cart