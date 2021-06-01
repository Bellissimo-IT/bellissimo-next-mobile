import Button from "../atoms/button/button"
import SizeChooseBtn from "../molecules/size-choose-btn/size-choose-btn"
import Image from 'next/image'

const PizzaBlock = ({name, description, img, price}) => {
    return<>
        <div className="pizza-block-container">
            <Image src={img} width="450" height="276" />
            <div className="about-pizza-block">
                <h3 className="pizza-name">{name}</h3>
                <p className="pizza-description text-color-grey">{description}</p>
                <div className="type-of-pizza type-choose">
                    <h5 className="text-color-grey">Выберите размер теста</h5>
                    <SizeChooseBtn data={["Маленкая", "Средняя", "Большая"]} />
                    <h5 className="text-color-grey">Выберите тип теста</h5>
                    < SizeChooseBtn data={["Воздушное", "Тонкое", "Хот-дог борт"]}/>
                </div>
            </div>
            <div className="pizza-price-btn">
                <h3 className="pizza-price">{price}</h3>
                <Button children="В корзину" />
            </div>
        </div>
    </>
}

export default PizzaBlock