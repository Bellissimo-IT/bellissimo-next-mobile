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

function Cart() {
    return<>
        <Header headerTitle="Корзина" />
        <div className="main-wrapper">
        <div className="products-container your-cart">
            <CartImgText />
        </div>
        <div className="products-container recommendation">
            <h2 className="recomend-title">Рекомендуем</h2>
            <div className="recomendation-container">
                {recomendBlockData.map(item => <RecomendBlockContainer name={item.name}  img={item.img} price={item.price} />)}
            </div>
        </div>
        <div className="products-container souce-add">
            <h2>Добавьте соус</h2>
            <div className="souce-container">
                <SouceBlockContainer />
            </div>
        </div>
        <div className="sum-container">
            <SumOrderCon />
        </div>
        <div className="fixed-order-btn">
        <Button children="Оформить" />
        </div>
        </div>
    </>
}

export default Cart