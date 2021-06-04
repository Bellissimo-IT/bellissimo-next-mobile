import styled from "styled-components"
import Pizza from "../../molecules/pizza/pizza"

const Title = styled.div`
    z-index: 1;
  padding: 15px 20px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(6px);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 100%);
`

const H2 = styled.h2`
    font-size: 26px;
  text-align: left;
`

function Section(props) {
    return <div className="pizza-list-container">
        <Title className="list-title">
            <H2>{props.title}</H2>
        </Title>
        {props.data.map(item=><Pizza img={item.img} name={item.name} description={item.description} price={item.price} href={item.href}/>)}
    </div>
}

function SectionList(props) {
    return props.products.map(item=><Section title={item.title} data={item.data}/>)
}

export default SectionList