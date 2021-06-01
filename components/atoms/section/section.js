import Pizza from "../../molecules/pizza/pizza"

function Section(props) {
    return <div className="pizza-list-container">
        <div className="list-title">
            <h2>{props.title}</h2>
        </div>
        {props.data.map(item=><Pizza img={item.img} name={item.name} description={item.description} price={item.price} href={item.href}/>)}
    </div>
}

function SectionList(props) {
    return props.products.map(item=><Section title={item.title} data={item.data}/>)
}

export default SectionList