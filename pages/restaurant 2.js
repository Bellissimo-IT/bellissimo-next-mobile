import Header from "../components/header"

const restaurantData = [
    {name: "Samarqand Darvoza", time: "10:00-2:30", address: "Samarqand Darvoza"},
    {name: "Samarqand Darvoza", time: "10:00-2:30", address: "Samarqand Darvoza"},
    {name: "Samarqand Darvoza", time: "10:00-2:30", address: "Samarqand Darvoza"},
    {name: "Samarqand Darvoza", time: "10:00-2:30", address: "Samarqand Darvoza"},
    {name: "Samarqand Darvoza", time: "10:00-2:30", address: "Samarqand Darvoza"},
    {name: "Samarqand Darvoza", time: "10:00-2:30", address: "Samarqand Darvoza"},
    {name: "Samarqand Darvoza", time: "10:00-2:30", address: "Samarqand Darvoza"}
]

function Restaurant() {
    return<>
    <Header headerTitle="Рестораны" />
    <ul className="restaunrant-list-contanier">
    {restaurantData.map(item => <li className="restaurant-list">
                <div className="text">
                    <h5 className="restaurant-name">{item.name}</h5>
                    <p>{item.address}</p>
                <div className="working-time">
                <p>{item.time}</p>
                </div>
                </div>
                <div className="phone-marker">
                    <img src="/imgs/pin.svg" alt="" />
                    <img src="/imgs/pin.svg" alt="" />
                </div>
            </li>
            )}
    </ul>
    </>
}

export default Restaurant