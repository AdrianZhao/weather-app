import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import uniqueRandomArray from 'unique-random-array';
import cities from './cities.json';
import { useLoadScript } from '@react-google-maps/api';
const libraries = ['places'];
let latitude = '';
let longitude = '';
const getRandomCity = uniqueRandomArray(cities);
function random(number) {
  let cities = [];
  for (let i = 0; i < number; i++) {
    cities.push(getRandomCity());
  }
  return cities;
}
let tempData = [];
tempData = random(15);
function Catalog() {
  const navigate = useNavigate();
  const [city, setCity] = useState([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDw-o__nFji35btfUneHm_86al6q_5_-GQ',
    libraries,
  });
  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      const tempAddress = Object.entries(tempData[i]);
      const address = tempAddress[0][1];
      const getPlaceDetails = async () => {
        if (isLoaded) {
          try {
            const geocoder = new window.google.maps.Geocoder();
            const results = await new Promise((resolve, reject) => {
              geocoder.geocode({ address }, (results, status) => {
                if (status === 'OK') {
                  resolve(results);
                } else {
                  reject(status);
                }
              });
            });
            if (results.length > 0) {
              const data = results.map((results) => ({ name: results.address_components[0].long_name, displayName: results.formatted_address, placeId: results.place_id, lat: results.geometry.location.lat(), lng: results.geometry.location.lng() }))
              const tempName = (Object.values(data[0]));
              setCity((prevCity) => [...prevCity, tempName]);
            } else {
              console.log('No results found.');
            }
          } catch (error) {
            console.log('Geocode request failed:', error);
          }
        }
      };
      getPlaceDetails();
    }
  }, [isLoaded]);
  const handleSort = (event) => {
    event.preventDefault();
    const sortedCity = [...city]; 
    sortedCity.sort((a, b) => {
      const nameA = a[1].toLowerCase().trim();;
      const nameB = b[1].toLowerCase().trim();;
      if (nameA < nameB) {
        return -1; 
      }
      if (nameA > nameB) {
        return 1; 
      }
      return 0; 
    });
  setCity(sortedCity); 
  };
  const handleNew = () => {
    navigate(`/newform`);
  }
  return (
    <>
      <h1 className='big-title'>Random City Listed Here</h1>
      <h2 className='title-detail'>
        This page will generate 10 random real cities base on cities.json file.
        If there are not enough 10 cities then google maps can't find the cities
        with the name in json file.
      </h2>
      <form className='button-wrapper'>
        <div>
          <button type='sort' className= 'sort-button'  onClick={handleSort}>By Name</button>
          <button className= 'sort-button'  onClick={handleNew}>New City</button>
        </div>
      </form>
      <section className='city-board'>
        {city.map(city => (
          <div key={city[2]} className='city-wrapper' onClick={() => {navigate(`/city/${city[0]}`); latitude = (city[3]); longitude = (city[4])}}>
            <h2>{city[1]}</h2>
          </div>
        ))}
      </section>;
    </>
  );
}
export { longitude, latitude };
export default Catalog;