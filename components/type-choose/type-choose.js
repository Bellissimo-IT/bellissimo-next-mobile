import SizeChooseBtn from "../molecules/size-choose-btn/size-choose-btn"
import Ingridient from "../molecules/ingridient/ingridient"
import Button from "../atoms/button/button"



function TypeChoose() {
    return(
        <div className="pizza-construct-container">
            <div className="pizza-construct-block">
                <img className="construct-img" src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fqa.bellissimo.uz%2Fstorage%2Fphotos%2F3d8d6a24-5595-4116-a19a-997ad6b27a60.jpg&w=750&q=75" />
                <div className="type-of-pizza type-choose">
                    <h2>Конструктор</h2>
                    <p className="secondry-text">Собери свою пиццу</p>
                    <h5>Выберите размер теста</h5>
                    <SizeChooseBtn data={["Маленкая", "Средняя", "Большая"]} />
                    <h5>Выберите тип теста</h5>
                    <SizeChooseBtn data={["Воздушное", "Тонкое", "Хот-дог борт"]}/>
                    <h5>Выберите ингридиенты</h5>
                    <Ingridient />
                    <Button primary children="В корзину"/>
                </div>
            </div>
        </div>
    )
}

export default TypeChoose