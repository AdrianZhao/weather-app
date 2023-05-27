import { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';
import { latitude, longitude } from './Catalog';
const containerStyle = {
  width: '800px',
  height: '800px'
};
function Detail() {
  const { cityname } = useParams();
  const center = {
    lat: latitude,
    lng: longitude
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDw-o__nFji35btfUneHm_86al6q_5_-GQ"
  })
  const [map, setMap] = useState(null)
  const onLoad = useCallback(function callback(map) {
    setMap(map)
  }, [])
  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])
  return isLoaded ? (
    <div className='center-div'>
      <h1 className='map-title'>{cityname}</h1>
      <GoogleMap
        className='mapbox'
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      </GoogleMap>
    </div>
  ) : <></>
}
export default Detail