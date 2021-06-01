import Image from 'next/image'

function Pizza(props) {
    return (
            <div className="pizza-list">
                <Image src={props.img} alt={props.name} width="160" height="120" />
                <div className="description">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <h3>{props.price}</h3>
                </div>
            </div>
    )
}

export default Pizza