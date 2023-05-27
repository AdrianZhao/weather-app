import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
let latitude = '';
let longitude = '';
function Catalog() {
  const navigate = useNavigate();
  const [city, setCity] = useState([]);
  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 9; i++) {
      temp[i] = randomNumber(0, 25124);
      const fetchList = async () => {
        try {
          const response = await axios.get(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=1&offset=${temp[i]}&hateoasMode=off`);
          const list = (response.data.data);
          setCity(oldArray => [...oldArray, ...list]);
        } catch (error) {
          console.log(error);
        }
      }
      fetchList();
    }
  },[])
  const wrapper = 
    <section className='city-board'>
      {city.map(city => (
        <div key={city.id} className='city-wrapper' onClick={() => {navigate(`/city/${city.name}`); latitude = (city.latitude); longitude = (city.longitude)}}>
          <h2>{city.name}</h2>
          <p>{city.country}</p>
        </div>
      ))}
    </section>;
  function randomNumber(min, max) {
    const randomNum = Math.floor((Math.random() * ((max - min) + 1)) + min);
    return randomNum;
  }
  const handleSort = (event) => {
    event.preventDefault();
    const sortedCity = [...city]; 
    sortedCity.sort((a, b) => {
      const nameA = a.name.toLowerCase().trim();
      const nameB = b.name.toLowerCase().trim();
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
      <form className='button-wrapper'>
        <div>
          <button type='sort' className= 'sort-button'  onClick={handleSort}>By Name</button>
          <button className= 'sort-button'  onClick={handleNew}>New City</button>
        </div>
      </form>
      {wrapper}
    </>
  );
}
export { longitude, latitude };
export default Catalog