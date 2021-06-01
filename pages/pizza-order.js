import Header from "../components/header";
import PizzaBlock from "../components/pizza-block/pizza-block";

function PizzaOrder() {
    const aboutPizza = [
        {name: "Альфредо", description: "Соус альфредо со шпинатом,моцарелла, куриное филе, грибы", price: "38 000 сум", img: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fqa.bellissimo.uz%2Fstorage%2Fphotos%2F01fce38e-ec3b-461e-a33c-31d4d9f8106f.jpg&w=750&q=75"}
    ]
    return<>
        <Header headerTitle="Альфредо" />
        <PizzaBlock name={aboutPizza[0].name} description={aboutPizza[0].description} price={aboutPizza[0].price} img={aboutPizza[0].img} />
    </>
}

export default PizzaOrder