import styled from "styled-components"
import Header from "../components/header"
import Image from 'next/image'

const restaurantData = [
    {name: "Samarqand Darvoza", time: "10:00-2:30", address: "Samarqand Darvoza"},
    {name: "Samarqand Darvoza", time: "10:00-2:30", address: "Samarqand Darvoza"},
    {name: "Samarqand Darvoza", time: "10:00-2:30", address: "Samarqand Darvoza"},
    {name: "Samarqand Darvoza", time: "10:00-2:30", address: "Samarqand Darvoza"},
    {name: "Samarqand Darvoza", time: "10:00-2:30", address: "Samarqand Darvoza"},
    {name: "Samarqand Darvoza", time: "10:00-2:30", address: "Samarqand Darvoza"},
    {name: "Samarqand Darvoza", time: "10:00-2:30", address: "Samarqand Darvoza"}
]

const RestaurantListContainer = styled.ul`
    display: flex;
  flex-direction: column;
  max-width: 100%;
  min-width: 310px;
  padding: 15px;
`

const RestaurantList = styled.li`
    max-width: 450px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.05);
  padding: 20px;
  border-radius: 15px;
`

const RestaurantTextContainer = styled.div`
    margin-right: 50px;
`

const H5 = styled.h5`
    font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  color: #323232;
`

const P = styled.p`
    font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 12px;
  /* identical to box height */
  text-align: left;
  margin: 10px 0;
  color: #808080;
`

const PhoneMarker = styled.div`
    display: flex;
  flex-direction: row;
  height: -webkit-max-content;
  height: -moz-max-content;
  height: max-content;
`

const PhoneMarkerImg = styled(Image)`
    display: block;
  height: auto;
  width: 25px;
  margin: 0 .5em ;
`

function Restaurant() {
    return<>
    <Header headerTitle="Рестораны" />
    <RestaurantListContainer>
    {restaurantData.map(item => 
            <RestaurantList>
                <RestaurantTextContainer>
                    <H5>{item.name}</H5>
                    <P>{item.address}</P>
                    <div>
                        <p>{item.time}</p>
                    </div>
                </RestaurantTextContainer>
                <PhoneMarker>
                    <PhoneMarkerImg width="25" height="25" src="/imgs/pin.svg" alt="" />
                    <PhoneMarkerImg width="25" height="25" src="/imgs/pin.svg" alt="" />
                </PhoneMarker>
            </RestaurantList>
            )}
    </RestaurantListContainer>
    </>
}

export default Restaurant