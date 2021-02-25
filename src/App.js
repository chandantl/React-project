import React , {useState , useEffect} from 'react';
import './App.css';
import {getWeatherData} from './data/Weatherapi'

function App() {

const [weatherdata , seatweatherData] = useState(null);
const [city ,setcity] = useState('bengaluru');
const [loading, setLoading] = useState(false);

const getData = async () =>{
try{
  const data = await getWeatherData(city);
  seatweatherData(data)
  console.log(data);
}catch(error) {
 console.log(error.message);
}

}
useEffect(() => {
getData()

},[])


  return (
    <div className="App">
     <div className = "card">
     <h2 className = "title"> <i className = "fa fa-cloud">Weather App</i></h2>
     <div className = "search-form">
     <input className= "input"  type ="text" onChange = {(e) => setcity(e.target.value)}  placeholder ="Enter your city name"></input>
     <button type ="button" onClick = {() => getData()}>search</button>
     </div> 
     {weatherdata !== null ? (
      <div className= "main-container">
        <h4>Live Weather condition</h4>
        <div className = "weather-icon"><img src= {`https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} /></div>
        
        <h3>{weatherdata.weather[0].main}</h3>
        <div className= "temprature">
        <h1>{ parseFloat(weatherdata.main.temp - 273.15).toFixed(1) }&deg;C</h1>
        </div>
        <div className ="location">
        <h3><i className ="fa fa-street-view"></i>{weatherdata.name} | {weatherdata.sys.country}</h3>
        </div>
        <div className = "tempraature-range">
        <h6> Min: {parseFloat(weatherdata.main.temp_min - 273.15).toFixed(1)}&deg;C || Max: {parseFloat(weatherdata.main.temp_max - 273.15).toFixed(1)}&deg;C || humidity: {weatherdata.main.humidity}% </h6>
        </div>
     </div>

     ) : null}
     
     </div>
    </div>
  );
}

export default App;
