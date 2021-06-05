import Button from "../atoms/button/button"
import SizeChooseBtn from "../molecules/size-choose-btn/size-choose-btn"
import Image from 'next/image'
import styled from "styled-components"

const AboutPizza = styled.div`
    padding: 15px;
`

const P = styled.p`
    margin: 1em 0;
    color: #787878;
    font-size: 15px;
`

const H5 = styled.h5`
margin-top: 1.5em;
    font-size: 18px;
`

const H3 = styled.h3`
    font-size: 22px;
`

const PizzaBlock = ({name, description, img, price}) => {
    return<>
        <div className="pizza-block-container">
            <Image src={img} width="450" height="276" />
            <AboutPizza className="about-pizza-block">
                <H3 className="pizza-name">{name}</H3>
                <P>{description}</P>
                <div className="type-of-pizza type-choose">
                    <H5 className="text-color-grey">Выберите размер теста</H5>
                    <SizeChooseBtn data={["Маленкая", "Средняя", "Большая"]} />
                    <H5 className="text-color-grey">Выберите тип теста</H5>
                    <SizeChooseBtn data={["Воздушное", "Тонкое", "Хот-дог борт"]}/>
                </div>
            </AboutPizza>
            <AboutPizza className="pizza-price-btn">
                <h3 className="pizza-price">{price}</h3>
                <Button children="В корзину" />
            </AboutPizza>
        </div>
    </>
}

export default PizzaBlock