import { YMaps, Map } from 'react-yandex-maps';
import Button from '../components/atoms/button/button';
import Header from '../components/header';
import Image from 'next/image'
import gps from '../public/imgs/gps.svg'

const findMe = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            console.log(pos);

        }, function() {
            alert(t('enableGPS'));
        });
    } else {
        alert(t('enableGPS'));
    }
};

const Maps = () => <>
    <Header headerTitle="Местоположение" />
    <div className="maps-container">
        <YMaps>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} height="100%" width="100%" />
            <Button className="map-button" children="Подтвердить" />
            <div className="my-location-btn"><Image src={gps} height="35" width="35" onClick={findMe} /></div>
        </YMaps>
    </div>
  </>;

export default Maps